const Joi = require('joi');

const {STATUS_CODE} = require('../../constant');
const {CustomError,CustomErrorData} = require('../../error');
const {messageService, chatService} = require('../../service');
const {createMsgValidator} = require('../../validator');

module.exports = async (req, res, next) => {
    try {
        const msg = req.body;
        const {text} = msg;
        const {author_id} = req.user;
        const {chat_id} = req.params;
        const id = chat_id;

        msg.chat_id = chat_id;
        msg.author_id = author_id;

        const chat = await chatService.getChatById(id);

        if (!chat){
            throw new CustomError(
                STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_CHAT_IS_NOT_PRESENT.message,
                CustomErrorData.BAD_REQUEST_CHAT_IS_NOT_PRESENT.code
            )
        }

        const {error} = Joi.validate({text}, createMsgValidator);

        if (error) {
            throw new CustomError(
                STATUS_CODE.FORBIDDEN,
                error.details[0].message
            )
        }
        await messageService.postMsg(msg);

        res.status(STATUS_CODE.CREATED).end()

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
};
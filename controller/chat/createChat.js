const Joi = require('joi');

const {STATUS_CODE} = require('../../constant');
const {CustomError, CustomErrorData} = require('../../error');
const {chatService} = require('../../service');
const {createChatValidator} = require('../../validator');

module.exports = async (req, res, next) => {
    try {
        const {chat_name} = req.body;

        const chatPresent = await chatService.getChatByParams({chat_name});

        if (chatPresent) {
            throw new CustomError(
                STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_CHAT_IS_ALREADY_PRESENT.message,
                CustomErrorData.BAD_REQUEST_CHAT_IS_ALREADY_PRESENT.code
            )
        }

        const {error} = Joi.validate({chat_name}, createChatValidator);

        if (error) {
            throw new CustomError(
                STATUS_CODE.FORBIDDEN,
                error.details[0].message
            )
        }
        await chatService.createChat({chat_name});

        res.status(STATUS_CODE.CREATED).end()

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
};
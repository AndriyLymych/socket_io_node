const Joi = require('joi');

const {STATUS_CODE} = require('../../constant');
const {CustomError, CustomErrorData} = require('../../error');
const {messageService} = require('../../service');
const {createMsgValidator} = require('../../validator');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {author_id} = req.user;
        const {text} = req.body;

        const msg = await messageService.getMsgById(id);

        if (!msg) {
            throw new CustomError(
                STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_MSG_IS_NOT_PRESENT.message,
                CustomErrorData.BAD_REQUEST_MSG_IS_NOT_PRESENT.code
            )
        }

        const {error} = Joi.validate({text}, createMsgValidator);

        if (error) {
            throw new CustomError(
                STATUS_CODE.FORBIDDEN,
                error.details[0].message
            )
        }

        await messageService.editMsg(text, id, author_id);

        res.status(STATUS_CODE.CREATED).end()

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
};
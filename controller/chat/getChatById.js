const {STATUS_CODE} = require('../../constant');
const {CustomError, CustomErrorData} = require('../../error');
const {chatService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;

        const chat = await chatService.getChatById(id);

        if (!chat) {
            throw new CustomError(
                STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_CHAT_IS_NOT_PRESENT.message,
                CustomErrorData.BAD_REQUEST_CHAT_IS_NOT_PRESENT.code
            )
        }

        res.json(chat)

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
};
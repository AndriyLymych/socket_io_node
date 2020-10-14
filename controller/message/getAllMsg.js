const {STATUS_CODE} = require('../../constant');
const {CustomError, CustomErrorData} = require('../../error');
const {messageService, chatService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        let msgObj = {};
        let {limit, page, chat_id} = req.query;
        const id = chat_id;

        if (+page === 0) {
            page = 1
        }

        page = page - 1;

        const chat = await chatService.getChatById(id);

        if (!chat) {
            throw new CustomError(
                STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_CHAT_IS_NOT_PRESENT.message,
                CustomErrorData.BAD_REQUEST_CHAT_IS_NOT_PRESENT.code
            )
        }

        const msgCount = await messageService.getTotalMsgCount(chat_id);
        const allMsg = await messageService.getAllMsgs(
            chat_id,
            +limit,
            +limit * page
        );


        msgObj.allMsg = allMsg;
        msgObj.msgCount = msgCount;

        res.json(msgObj)

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
};
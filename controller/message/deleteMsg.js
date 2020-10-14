const {STATUS_CODE} = require('../../constant');
const {CustomError, CustomErrorData} = require('../../error');
const {messageService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {author_id} = req.user;

        const msg = await messageService.getMsgById(id);

        if (!msg) {
            throw new CustomError(
                STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_MSG_IS_NOT_PRESENT.message,
                CustomErrorData.BAD_REQUEST_MSG_IS_NOT_PRESENT.code
            )
        }

        await messageService.deleteMsg(id,author_id);

        res.end()

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
};
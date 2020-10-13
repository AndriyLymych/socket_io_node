const {CustomErrorData, CustomError} = require('../../error');
const {oauthService} = require('../../service');
const {STATUS_CODE: {UNAUTHORIZED}} = require('../../constant');

module.exports = async (req, res, next) => {
    try {
        const access_token = req.get('Authorization');

        if (!access_token) {
            return next(new CustomError(
                UNAUTHORIZED,
                CustomErrorData.UNAUTHORIZED_USER.message,
                CustomErrorData.UNAUTHORIZED_USER.code,
            ));
        }

        await oauthService.deleteTokenPairFromDb(access_token);

        res.end()

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
const {CustomError, CustomErrorData: {BAD_REQUEST_USER_NOT_PRESENT, UNAUTHORIZED_USER}} = require('../../error');
const {STATUS_CODE: {UNAUTHORIZED, BAD_REQUEST}} = require('../../constant');
const {authService} = require('../../service');

module.exports = async (req, res, next) => {

    const access_token = req.get('Authorization');

    if (!access_token) {
        return next(new CustomError(
            UNAUTHORIZED,
            UNAUTHORIZED_USER.message,
            UNAUTHORIZED_USER.code,
        ));
    }

    const user = await authService.getUserFromToken({access_token});

    if (!user) {
        return next(new CustomError(
            BAD_REQUEST,
            BAD_REQUEST_USER_NOT_PRESENT.message,
            BAD_REQUEST_USER_NOT_PRESENT.code,
        ));
    }

    req.user = user;

    next()


};
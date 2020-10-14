const {tokenChecker} = require('../../helpers');
const {CustomError, CustomErrorData} = require('../../error');
const {STATUS_CODE: {UNAUTHORIZED}, TOKEN_TYPE: {ACCESS_TOKEN}} = require('../../constant');

module.exports = async (req, res, next) => {

        const token = req.get('Authorization');

        if (!token) {
            return next(new CustomError(
                UNAUTHORIZED,
                CustomErrorData.UNAUTHORIZED_USER.message,
                CustomErrorData.UNAUTHORIZED_USER.code,
            ));
        }

        await tokenChecker(token, ACCESS_TOKEN);

        next()

};
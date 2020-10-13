const jwt = require('jsonwebtoken');

const {TOKEN_TYPE: {ACCESS_TOKEN, REFRESH_TOKEN}, STATUS_CODE: {UNAUTHORIZED}} = require('../constant');
const {JWT_REFRESH_SECRET, JWT_ACCESS_SECRET} = require('../config');
const {CustomError, CustomErrorData: {UNAUTHORIZED_BAD_REFRESH_TOKEN, UNAUTHORIZED_BAD_ACCESS_TOKEN}} = require('../error');

module.exports = async (token, token_type) => {

    if (token_type === ACCESS_TOKEN) {
        try {
            await jwt.verify(token, JWT_ACCESS_SECRET)

        } catch {
            throw  new CustomError(
                UNAUTHORIZED,
                UNAUTHORIZED_BAD_ACCESS_TOKEN.message,
                UNAUTHORIZED_BAD_ACCESS_TOKEN.code,
            )

        }
    }
    if (token_type === REFRESH_TOKEN) {
        try {
            await jwt.verify(token, JWT_REFRESH_SECRET)

        } catch {
            throw  new CustomError(
                UNAUTHORIZED,
                UNAUTHORIZED_BAD_REFRESH_TOKEN.message,
                UNAUTHORIZED_BAD_REFRESH_TOKEN.code,
            )

        }
    }
}
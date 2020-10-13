module.exports = {
    // 400 error code

    //+
    BAD_REQUEST_USER_NOT_PRESENT: {
        message: 'User is not present',
        code: 4003
    },

    //+
    BAD_REQUEST_USER_ALREADY_PRESENT: {
        message: 'User is already present',
        code: 4006
    },

    BAD_REQUEST_WRONG_PASSWORD: {
        message: 'Wrong password',
        code: 40014
    },


    //401 error code
    UNAUTHORIZED_USER: {
        message: 'User is not authorized',
        code: 4011
    },
    //+
    UNAUTHORIZED_BAD_ACCESS_TOKEN: {
        message: 'Access token is not valid',
        code: 4012
    },
    //+
    UNAUTHORIZED_BAD_REFRESH_TOKEN: {
        message: 'Refresh token is not valid',
        code: 4013
    },
    //+
    UNAUTHORIZED_BAD_TOKEN: {
        message: 'Action token is not valid',
        code: 4014
    },


    //403 error code


    FORBIDDEN_WRONG_ACTION_TOKEN: {
        message: 'Wrong action token',
        code: 4034
    },

};
const jwt = require('jsonwebtoken');

const {JWT_ACCESS_LIFE, JWT_ACCESS_SECRET, JWT_REFRESH_LIFE, JWT_REFRESH_SECRET} = require('../config');

module.exports = () => {
    const access_token = jwt.sign({}, JWT_ACCESS_SECRET, {expiresIn: JWT_ACCESS_LIFE});
    const refresh_token = jwt.sign({}, JWT_REFRESH_SECRET, {expiresIn: JWT_REFRESH_LIFE});

    return {
        access_token,
        refresh_token
    }
}
const bcrypt = require('bcrypt');

const {CustomError, CustomErrorData:{BAD_REQUEST_WRONG_PASSWORD}} = require('../error');
const {STATUS_CODE} = require('../constant');

module.exports = async (passwordFromDb, passwordToHash) => {
    const checkedPassword = await bcrypt.compare(passwordToHash,passwordFromDb);

    if (!checkedPassword){
        throw new CustomError(
            STATUS_CODE.BAD_REQUEST,
            BAD_REQUEST_WRONG_PASSWORD.message,
            BAD_REQUEST_WRONG_PASSWORD.code
        )
    }
};
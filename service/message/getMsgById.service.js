const db = require('../../dataBase').getInstance();
const {DB_TABLE_NAME: {MESSAGE}} = require('../../constant');

module.exports = id => {
    const MessageModel = db.getModel(MESSAGE);

    return MessageModel.findByPk(id, {
            raw: true
        }
    );
};
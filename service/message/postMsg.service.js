const db = require('../../dataBase').getInstance();
const {DB_TABLE_NAME: {MESSAGE}} = require('../../constant');

module.exports = msgObj => {
    const MessageModel = db.getModel(MESSAGE);

    MessageModel.create(msgObj);
};
const db = require('../../dataBase').getInstance();
const {DB_TABLE_NAME: {MESSAGE}} = require('../../constant');

module.exports = (chat_id, limit, offset) => {
    const MessageModel = db.getModel(MESSAGE);

    return MessageModel.findAll({
        raw: true,
        where: {
            chat_id,
        },
        limit,
        offset
    });
};
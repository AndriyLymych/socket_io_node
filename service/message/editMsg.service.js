const db = require('../../dataBase').getInstance();
const {DB_TABLE_NAME: {MESSAGE}} = require('../../constant');

module.exports = (text, id,author_id) => {
    const MessageModel = db.getModel(MESSAGE);

    MessageModel.update({text}, {
        where: {
            id,
            author_id
        }
    });
};
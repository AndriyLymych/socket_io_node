const db = require('../../dataBase').getInstance();
const {DB_TABLE_NAME: {MESSAGE}} = require('../../constant');

module.exports = (id,author_id) => {
    const MessageModel = db.getModel(MESSAGE);

    MessageModel.destroy({
        where: {
            id,
            author_id
        }
    });
};
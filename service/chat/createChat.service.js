const db = require('../../dataBase').getInstance();
const {DB_TABLE_NAME: {CHAT}} = require('../../constant');

module.exports = chat => {
    const ChatModel = db.getModel(CHAT);

    ChatModel.create(chat);
};
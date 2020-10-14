const db = require('../../dataBase').getInstance();
const {DB_TABLE_NAME: {CHAT}} = require('../../constant');

module.exports = () => {
    const ChatModel = db.getModel(CHAT);

    return ChatModel.findAll({
        raw: true
    })
}
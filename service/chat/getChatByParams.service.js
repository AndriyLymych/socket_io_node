const db = require('../../dataBase').getInstance();
const {DB_TABLE_NAME: {CHAT}} = require('../../constant');

module.exports = params => {
    const ChatModel = db.getModel(CHAT);

    return ChatModel.findOne({
        where: params,
        raw: true

    })
};
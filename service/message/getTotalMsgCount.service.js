const Sequelize = require('sequelize');

const db = require('../../dataBase').getInstance();
const {DB_TABLE_NAME: {MESSAGE}} = require('../../constant');

module.exports = (chat_id) => {
    const MessageModel = db.getModel(MESSAGE);

    return MessageModel.findOne({
        where: {
            chat_id
        },
        raw: true,
        attributes: [[Sequelize.fn('COUNT', Sequelize.col('chat_id')), 'msg_count']]
    });
};
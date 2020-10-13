const {DB_TABLE_NAME: {MESSAGE}} = require('../../constant');

module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define(MESSAGE, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
            required: true
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('now')
        },
        author_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        chat_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: true
        }
    }, {
        tableName: MESSAGE,
        timestamps: false
    });

    const Chat = sequelize.import('./Chat');
    const Author = sequelize.import('./Author');

    Message.belongsTo(Chat, {foreignKey: 'chat_id'});
    Message.belongsTo(Author, {foreignKey: 'author_id'});

    return Message

};
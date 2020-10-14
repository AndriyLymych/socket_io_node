const {DB_TABLE_NAME: {CHAT}} = require('../../constant');

module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define(CHAT, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            chat_name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique:true,
                required: true
            }
        },
        {
            tableName: CHAT,
            timestamps: false
        });

    return Chat

};
const {DB_TABLE_NAME: {OAUTH_TOKEN}} = require('../../constant');

module.exports = (sequelize, DataTypes) => {
    const OauthToken = sequelize.define(OAUTH_TOKEN, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        access_token: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        refresh_token: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        author_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        }
    }, {
        tableName: OAUTH_TOKEN,
        timestamps: false
    });

    const Author = sequelize.import('./Author');

    OauthToken.belongsTo(Author, {foreignKey: 'author_id'});

    return OauthToken

};
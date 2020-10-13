const {DB_TABLE_NAME: {AUTHOR}} = require('../../constant');

module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define(AUTHOR, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            required: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },

    }, {
        tableName: AUTHOR,
        timestamps: false
    });

    return Author

};
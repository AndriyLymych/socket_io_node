const db = require('../../dataBase').getInstance();
const {DB_TABLE_NAME: {AUTHOR}} = require('../../constant');

module.exports = author => {
    const AuthorModel = db.getModel(AUTHOR);

    return AuthorModel.create(author)
};
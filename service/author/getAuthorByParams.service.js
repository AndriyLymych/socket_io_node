const db = require('../../dataBase').getInstance();
const {DB_TABLE_NAME: {AUTHOR}} = require('../../constant');

module.exports = params => {
    const AuthorModel = db.getModel(AUTHOR);

    return AuthorModel.findOne({
        where: params,
        attributes: ['id', 'name', 'surname'],
        raw: true
    })
};
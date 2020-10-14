const db = require('../../dataBase').getInstance();
const {DB_TABLE_NAME: {OAUTH_TOKEN, AUTHOR}} = require('../../constant');

module.exports = token => {
    const OauthModel = db.getModel(OAUTH_TOKEN);
    const AuthorModel = db.getModel(AUTHOR);

    return OauthModel.findOne({
        where: token,
        include: [{
            model: AuthorModel,
            attributes: ['surname', 'name']
        }],
        raw: true
    })
};
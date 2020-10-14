const db = require('../../dataBase').getInstance();
const {DB_TABLE_NAME: {OAUTH_TOKEN}} = require('../../constant');

module.exports = token => {
    const OauthModel = db.getModel(OAUTH_TOKEN);

    OauthModel.destroy({
        where: token
    });
}
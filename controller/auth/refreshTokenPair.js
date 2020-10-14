const {CustomError} = require('../../error');
const {STATUS_CODE: {CREATED}} = require('../../constant');
const {tokenCreator} = require('../../helpers');
const {oauthService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const refresh_token = req.get('Authorization');
        const {author_id} = req.user;

        await oauthService.deleteTokenPairFromDb({refresh_token})

        const tokenPair = tokenCreator();

        oauthService.insertTokenPairToDB({
            author_id,
            ...tokenPair
        });

        res.status(CREATED).json(tokenPair)

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
}
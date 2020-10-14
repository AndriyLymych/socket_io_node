const router = require('express').Router();

const {authController: {authAuthor, logoutAuthor, refreshTokenPair, getAuthorFromAccessToken}} = require('../../controller');
const {
    authMiddleware: {
        refreshTokenChecker,
        getAuthorFromRefreshToken,
        accessTokenChecker,
        getAuthorFromAccessToken: getAuthorFromAccessTokenMiddleware
    }
} = require('../../middleware');

router.post('/', authAuthor);
router.post('/logout', logoutAuthor);
router.post('/refresh', refreshTokenChecker, getAuthorFromRefreshToken, refreshTokenPair);
router.get('/me', accessTokenChecker, getAuthorFromAccessTokenMiddleware, getAuthorFromAccessToken);

module.exports = router;
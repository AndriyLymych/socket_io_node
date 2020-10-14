const router = require('express').Router();

const {messageController: {editMsg, deleteMsg, postMsg, getAllMsg}} = require('../../controller');
const {authMiddleware: {accessTokenChecker, getAuthorFromAccessToken}} = require('../../middleware');

router.post('/:chat_id', accessTokenChecker, getAuthorFromAccessToken, postMsg);
router.put('/:id', accessTokenChecker, getAuthorFromAccessToken, editMsg);
router.delete('/:id', accessTokenChecker, getAuthorFromAccessToken, deleteMsg);
router.get('/', accessTokenChecker, getAuthorFromAccessToken, getAllMsg);

module.exports = router;
const router = require('express').Router();

const {chatController: {createChat, getChatById, getAllChats}} = require('../../controller');
const {authMiddleware: {accessTokenChecker}} = require('../../middleware');

router.post('/', accessTokenChecker, createChat);
router.get('/', accessTokenChecker, getAllChats);
router.get('/:id', accessTokenChecker, getChatById);

module.exports = router;
const {CustomError} = require('../../error');
const {chatService} = require('../../service');

module.exports = async (req, res, next) => {
    try {

        const chats = await chatService.getAllChats();

        res.json(chats)

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
};
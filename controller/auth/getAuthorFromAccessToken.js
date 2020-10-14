const {CustomError} = require('../../error');
const {authorService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {author_id:id} = req.user;

        const user = await authorService.getAuthorByParams({id});

        res.json(user)

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
};
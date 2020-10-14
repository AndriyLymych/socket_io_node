const Joi = require('joi');

const {authorService} = require('../../service');
const {
    CustomError,
    CustomErrorData: {
        BAD_REQUEST_USER_ALREADY_PRESENT: {
            message: userAlreadyPresentMsg,
            code: userAlreadyPresentCode
        }
    }
} = require('../../error');
const {STATUS_CODE: {BAD_REQUEST, CREATED, FORBIDDEN}} = require('../../constant');
const {passwordHasher} = require('../../helpers');
const {authorValidator} = require('../../validator');

module.exports = async (req, res, next) => {
    try {

        const author = req.body;
        const {email, password} = author;

        const authorPresent = await authorService.getAuthorByParams({email});

        if (authorPresent) {
            throw new CustomError(
                BAD_REQUEST,
                userAlreadyPresentMsg,
                userAlreadyPresentCode
            )
        }

        const {error} = Joi.validate(author, authorValidator);

        if (error) {
            throw new CustomError(
                FORBIDDEN,
                error.details[0].message
            )
        }

        author.password = await passwordHasher(password);

        await authorService.createAuthor(author);

        res.status(CREATED).end()

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
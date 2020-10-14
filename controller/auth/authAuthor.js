const Joi = require('joi');

const {authValidator} = require('../../validator');
const {CustomError, CustomErrorData} = require('../../error');
const {STATUS_CODE} = require('../../constant');
const {tokenCreator, passwordChecker} = require('../../helpers');
const {authorService, oauthService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const author = await authorService.getAuthorByParams({email});

        const {id: author_id, password: passwordFromDB} = author;

        if (!author) {
            throw new CustomError(
                STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_USER_NOT_PRESENT.message,
                CustomErrorData.BAD_REQUEST_USER_NOT_PRESENT.code
            )
        }

        const {error} = Joi.validate({email,password},authValidator);

        if (error){
            throw new CustomError(
                STATUS_CODE.FORBIDDEN,
                error.details[0].message
            )
        }
        await passwordChecker(passwordFromDB, password);

        const tokenPair = tokenCreator();

        await oauthService.insertTokenPairToDB({
            author_id,
            ...tokenPair
        });

        res.status(STATUS_CODE.CREATED).json(tokenPair)

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
};
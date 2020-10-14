const Joi = require('joi');

module.exports = Joi.object().keys({
    text: Joi.string().required(),
    author_id: Joi.number().required(),
    chat_id: Joi.number().required()
});
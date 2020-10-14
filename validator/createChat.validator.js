const Joi = require('joi');

module.exports = Joi.object().keys({
    chat_name: Joi.string().min(2).max(255).required()
});
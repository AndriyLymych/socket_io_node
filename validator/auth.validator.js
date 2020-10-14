const Joi = require('joi');

module.exports = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(255).required()
})
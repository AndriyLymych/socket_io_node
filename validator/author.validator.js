const Joi = require('joi');

module.exports = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(255).required(),
    name: Joi.string().min(2).max(70).required(),
    surname: Joi.string().min(2).max(120).required()
})
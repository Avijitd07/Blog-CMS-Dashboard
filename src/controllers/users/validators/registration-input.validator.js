const Joi = require('joi');

const userRegistrationInput = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .min(6)
        .max(15)
        .required(),
});

module.exports = { userRegistrationInput };
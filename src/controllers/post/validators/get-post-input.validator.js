const Joi = require('joi');

const getPostInput = Joi.object({
    id: Joi.string()
        .length(24)
        .required()
        .messages({
            'string.base': 'ID must be a string',
            'string.empty': 'ID cannot be empty',
            'string.length': 'ID must be 24 characters long',
            'any.required': 'ID is required'
        })
});

module.exports = { getPostInput };
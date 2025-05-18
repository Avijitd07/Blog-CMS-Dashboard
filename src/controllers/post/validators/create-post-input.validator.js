const Joi = require('joi');

const seoInput = Joi.object({
    metaTitle: Joi.string().optional(),
    metaDescription: Joi.string().optional(),
    featuredImageUrl: Joi.string().uri().optional(),
    featuredImageAlt: Joi.string().optional(),
    ogTitle: Joi.string().optional(),
    ogDescription: Joi.string().optional(),
    ogImageUrl: Joi.string().uri().optional()
});

const createPostInput = Joi.object({
    title: Joi.string()
        .min(3)
        .max(100)
        .required(),
    content: Joi.string()
        .min(10)
        .required(),
    status: Joi.string()
        .valid('draft', 'published')
        .required(),
    seo: seoInput
});

module.exports = { createPostInput };

// TODO
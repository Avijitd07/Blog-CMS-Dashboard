const Blog = require('../../models/blog.entity');

async function createBlog (req, res) {
    try {
        const {
            title,
            content,
            status,
            seo,
            author
        } = req.body;

        const blog = await Blog.create({
            title,
            content,
            status,
            author,
            seo: seo || null,
        });

        res.status(201).json({
            status: true,
            message: 'Blog created successfully.',
            data: blog
        });
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({ status: false, message: 'Server error' });
    }
}

module.exports = { createBlog };
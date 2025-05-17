const Blog = require('../../models/blog.entity');

async function getBlog (req, res) {
    try {

        const id = req.params.id;

        const blog = await Blog.findOne({_id: id}).populate({path: 'author', model: 'User', select: 'username'});

        if (!blog) {
            return res.status(404).json({
                status: false,
                message: 'Blog not found.',
            });
        }

        res.status(200).json({
            status: true,
            message: 'Blog retrieved successfully.',
            data: blog
        });
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({ status: false, message: 'Server error' });
    }
};

module.exports = { getBlog };
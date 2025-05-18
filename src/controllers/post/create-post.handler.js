const { PostManagementService } = require('../../service/post-management.service');

async function createPost(req, res) {
    try {
        const body = req.body;
        const author = req.userId;

        const postManagementService = new PostManagementService();
        const post = await postManagementService.create({ body, author });


        res.status(201).json({
            status: true,
            message: 'Post created successfully.',
            data: post
        });
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({ status: false, message: 'Server error' });
    }
}

module.exports = { createPost };
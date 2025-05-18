const { PostManagementService } = require('../../service/post-management.service');

async function getPost(req, res) {
    try {

        const id = req.params.id;
        const author = req.userId;

        const postManagementService = new PostManagementService();
        const post = await postManagementService.getPost({ id, author });

        res.status(200).json({
            status: true,
            message: 'Post retrieved successfully.',
            data: post
        });
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({ status: false, message: 'Server error' });
    }
};

async function getAllPosts(req, res) {
    try {
        const author = req.userId;

        const postManagementService = new PostManagementService();
        const posts = await postManagementService.getAllPosts({ author });

        if (posts.length === 0) {
            return res.status(404).json({
                status: false,
                message: 'No posts found for this author.',
                data: []
            });
        }

        res.status(200).json({
            status: true,
            message: 'Post fetched successfully.',
            data: posts
        });
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({ status: false, message: 'Server error' });
    }
};


module.exports = { getPost, getAllPosts };
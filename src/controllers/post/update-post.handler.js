const { PostManagementService } = require('../../service/post-management.service');

async function updatePost(req, res) {
    try {
        const { id } = req.params;
        const body = req.body;
        const author = req.userId;

        const postManagementService = new PostManagementService();
        const updatedPost = await postManagementService.updatePost({ id, body, author });


        res.status(200).json({
            status: true,
            message: 'Post updated successfully.',
            data: updatedPost,
        });

    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({ status: false, message: 'Server error' });
    }
};

module.exports = { updatePost };
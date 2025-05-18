const { PostManagementService } = require('../../service/post-management.service');

async function deletePost(req, res) {
    try {
        const { id } = req.params;
        const author = req.userId;

        const postManagementService = new PostManagementService();
        const deletePostCount = await postManagementService.deletePost({ id, author });


        res.status(200).json({ status: true, message: 'Post deleted successfully', data: deletePostCount });
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({ status: false, message: 'Server error' });
    }
};

module.exports = { deletePost };
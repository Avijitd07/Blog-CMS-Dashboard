const express = require('express');
const { createPost } = require('../controllers/post/create-post.handler');
const { getPost, getAllPosts } = require('../controllers/post/get-post.handler');
const { updatePost } = require('../controllers/post/update-post.handler');
const { authorization } = require('../middlewares/auth');
const { deletePost } = require('../controllers/post/delete-post.handler');
const { validator } = require('../middlewares/validator');
const { createPostInput } = require('../controllers/post/validators/create-post-input.validator');
const { getPostInput } = require('../controllers/post/validators/get-post-input.validator');

const router = express.Router();

router.post('/', authorization, validator(createPostInput), createPost);
router.get('/:id', authorization, validator(getPostInput, 'params'), getPost);
router.get('/', authorization, getAllPosts);
router.put('/:id', authorization, validator(getPostInput, 'params'), validator(createPostInput), updatePost);
router.delete('/:id', authorization, validator(getPostInput, 'params'), deletePost);

module.exports = router;
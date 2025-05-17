const express = require('express');
const { createBlog } = require('../controllers/blog/create-blog.handler');
const { getBlog } = require('../controllers/blog/get-blog.handler');

const router = express.Router();

router.post('/create', createBlog);
router.get('/:id', getBlog);

module.exports = router;
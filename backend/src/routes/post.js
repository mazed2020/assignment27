const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
const { verifyToken } = require('../middlewares/auth');

// Get all posts
router.get('/', PostController.getPosts);

// Get a single post by ID with comments
router.get('/:id', PostController.getPostById);

// Create a new post (only for authenticated users)
router.post('/', verifyToken, PostController.createPost);

// Update a post (only for authenticated users)
router.put('/:id', verifyToken, PostController.updatePost);

// Delete a post (only for authenticated users)
router.delete('/:id', verifyToken, PostController.deletePost);

module.exports = router;

// src/routes/api.js
const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
const CommentController = require('../controllers/CommentController');

// Post routes
router.post('/posts', PostController.createPost);
router.get('/posts', PostController.getPosts);
router.get('/post/:id', PostController.getPostById);

// Comment routes
router.post('/post/:id/comments', CommentController.addComment);

module.exports = router;

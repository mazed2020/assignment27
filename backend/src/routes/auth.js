const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Register a new user
router.post('/register', AuthController.registerUser);

// Login a user
router.post('/login', AuthController.loginUser);

// Logout a user
router.post('/logout', AuthController.logoutUser);

module.exports = router;

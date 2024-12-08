const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");
const { verifyToken, verifyAdmin } = require("../middlewares/auth"); // Added verifyAdmin for admin-specific routes

// Admin login
router.post("/login", AdminController.loginAdmin);

// Admin logout
router.post("/logout", verifyToken, verifyAdmin, AdminController.logoutAdmin);

// Admin dashboard
router.get("/dashboard", verifyToken, verifyAdmin, AdminController.getAdminDashboard);

// Manage posts
router.delete("/post/:id", verifyToken, verifyAdmin, AdminController.deletePost);

// Moderate user comments
router.get("/comments", verifyToken, verifyAdmin, AdminController.getAllComments);
router.delete("/comment/:id", verifyToken, verifyAdmin, AdminController.deleteComment);

module.exports = router;

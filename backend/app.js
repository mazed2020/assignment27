const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const asyncHandler = require('express-async-handler');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(morgan('dev')); // Log incoming requests for development

// MongoDB connection with retry logic
const URI = process.env.MONGO_URI;
if (!URI) {
    console.error("MongoDB URI is not defined. Please check your .env file.");
    process.exit(1); // Exit if no URI is found
}

const connectWithRetry = () => {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((err) => {
            console.error("Error connecting to database: ", err);
            setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
        });
};

connectWithRetry();

// Validate other environment variables
if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is not defined. Please check your .env file.");
    process.exit(1); // Exit if JWT_SECRET is not found
}

// Import Routes
const adminRoutes = require('./src/routes/admin');
const postRoutes = require('./src/routes/post');
const authRoutes = require('./src/routes/auth');

// Routes
app.use('/api/admin', asyncHandler(adminRoutes)); // Admin routes
app.use('/api/posts', asyncHandler(postRoutes)); // Public routes for blog posts
app.use('/api/auth', asyncHandler(authRoutes)); // Authentication routes

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
});

// Handle undefined routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Global error handling for uncaught exceptions and unhandled rejections
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err.message);
    process.exit(1); // Exit the process to avoid unpredictable behavior
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
    process.exit(1); // Exit the process to avoid unpredictable behavior
});

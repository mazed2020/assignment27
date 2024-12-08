const jwt = require('jsonwebtoken');

// Middleware to verify a token and ensure the user is authenticated
exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers['x-auth-token'];

    if (!token) {
      return res.status(403).json({ message: 'No token provided' });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    // Changed to 401 for authentication failure
    return res.status(401).json({ message: 'Failed to authenticate token', error: err.message });
  }
};


// Middleware for admin-only access
exports.verifyAdmin = (req, res, next) => {
  if (!req.userId || req.userId !== process.env.ADMIN_USER_ID) {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }
  next();
};

// Middleware to check authentication and attach user info
exports.attachUser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers['x-auth-token'];

    if (!token) {
      return next();
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach the decoded user info to the request object
    next();  // Continue processing
  } catch (err) {
    // Proceed without attaching user if token is invalid
    return next();
  }
};

const jwt = require('jsonwebtoken');
const axios = require('axios');

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.auth_token;

  if (!token) return res.status(403).json({ message: 'Token required' });

  try {
    const response =   await axios.get('http://localhost:5000/api/auth/verify-token', {
      withCredentials: true,
      headers: {
        Cookie: `auth_token=${token}`, // Explicitly send the token cookie
      },
    });
    req.user = response.data;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized token' });
  }
};

module.exports = authMiddleware;

const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const tokenWithoutBearer = token.split(' ')[1];
  try {
    const decoded = jwt.verify(tokenWithoutBearer, secretKey);
    req.user = decoded; // Store decoded user information in req if needed
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

module.exports = auth;

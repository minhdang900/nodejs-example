const jwt = require('jsonwebtoken');
const config = require('./config');

module.exports = (req, res, next) => {
  // get header, express header auto convert to lowercase
  let token = req.headers['x-access-token'] || req.headers.authorization;
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(200).json({
          message: 'Token is not valid',
        });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    res.status(403).json({
      message: 'Token not exist',
    });
  }
}
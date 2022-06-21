const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

module.exports = (token) => {
  if (token) {
    try {
      const user = jwt.verify(token, SECRET_KEY);
      console.log(user);
      return user;
    } catch (err) {
      throw new AuthenticationError('Invalid/Expired token');
    }
  }
  throw new Error('Authorization header must be provided');
};

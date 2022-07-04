const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {SECRET_KEY} = require('../../config');
const checkAuth = require('../../services/check.auth');
const userService = require('../user/user.service');
const {getUserByUsername} = require('../user/user.service');

const generateToken = (user) => {
  return jwt.sign(user, SECRET_KEY, {expiresIn: '24h'});
};

const login = async ({username, password}) => {
  const user = await getUserByUsername(username);
  if (!user) {
    console.error('No user found');
    return;
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    console.log(match);
    console.error('Wrong credentials');
    return;
  }
  delete user.password;
  const token = await generateToken(user);
  return {
    ...user,
    token,
  };
};

const signup = async ({
  username,
  email,
  password,
  confirmPassword,
  fullname,
}) => {
  try {
    if (password !== confirmPassword) {
      return new Error('Passwords do not match');
    }
    const encrypted = await bcrypt.hash(password, 12);
    const user = {
      username,
      email,
      password: encrypted,
      fullname,
      imgUrl:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
      createdAt: Date.now(),
      followingIds: [],
      followersIds: [],
      postIds: [],
      about: '',
    };

    await userService.add(user);
    return await login({username, password});
  } catch (err) {
    return new Error(err);
  }
};

module.exports = {
  login,
  signup,
};

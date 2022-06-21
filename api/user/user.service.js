const { makeId } = require('../../services/util');

const users = [
  {
    _id: 'u101',
    username: 'Muko',
    password: 'mukmuk',
    fullname: 'Muki Muka',
    imgUrl: 'http://some-img',
    createdAt: 123543452,
    followingIds: ['u105'],
    followersIds: ['u105'],
  },
];

const getUserById = async (id) => {
  try {
    return await users.find((user) => user._id === id);
  } catch (err) {
    throw new Error(err);
  }
};

const getUserByUsername = async (username) => {
  try {
    return await users.find((user) => user.username === username);
  } catch (err) {
    throw new Error(err);
  }
};

const add = async (user) => {
  try {
    user._id = makeId();
    await users.push(user);
    return user;
  } catch (err) {
    return new Error('Could not add user');
  }
};

module.exports = {
  getUserById,
  getUserByUsername,
  add,
};

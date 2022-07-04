const userService = require('./user.service');

const getUserByUsername = async (req, res) => {
  try {
    const {username} = req.params;
    const user = await userService.getUserByUsername(username);
    res.send(user);
  } catch (err) {
    console.error(err);
  }
};
const getUserProfile = async (req, res) => {
  try {
    const {username} = req.params;
    const user = await userService.getUserByUsername(username);
    delete user.password;
    res.send(user);
  } catch (err) {
    console.error(err);
  }
};

// const getUserById = async (req, res) => {
//   try {
//     const {id} = req.params;
//     const user = await userService.getUserById(id);
//     res.send(user);
//   } catch (err) {
//     console.error(err);
//   }
// };
const query = async (req, res) => {
  try {
    const users = await userService.query();
    res.send(users);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  // getUserById,
  query,
  getUserByUsername,
  getUserProfile,
};

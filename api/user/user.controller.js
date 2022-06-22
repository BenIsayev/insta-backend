const userService = require('./user.service');

const getUserById = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await userService.getUserById(id);
    res.send(user);
  } catch (err) {
    console.error(err);
  }
};
const query = async (req, res) => {
  try {
    const users = await userService.query();
    res.send(users);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getUserById,
  query,
};

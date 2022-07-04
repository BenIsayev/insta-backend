const authService = require('./auth.service');

const signup = async (req, res) => {
  try {
    const credentials = req.body;
    const returnedUser = await authService.signup(credentials);
    res.send(returnedUser);
  } catch (err) {
    res.sendStatus(401);
  }
};

const login = async (req, res) => {
  try {
    const credentials = req.body;
    console.log(credentials);
    const returnedUser = await authService.login(credentials);
    res.send(returnedUser);
  } catch (err) {
    res.sendStatus(401);
  }
};

module.exports = {
  login,
  signup,
};

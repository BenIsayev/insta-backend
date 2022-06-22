const express = require('express');
const router = express.Router();
const {getUserById, getUsers} = require('./user.controller');

router.get('/', getUsers);
router.get('/:id', getUserById);

module.exports = router;

const express = require('express');
const router = express.Router();
const {getUserById, query} = require('./user.controller');

router.get('/', query);
router.get('/:id', getUserById);

module.exports = router;

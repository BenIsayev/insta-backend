const express = require('express');
const router = express.Router();
const {getUserProfile, query} = require('./user.controller');

router.get('/', query);
router.get('/:username', getUserProfile);

module.exports = router;

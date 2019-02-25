const get_role = require('./get_role.action.js');
const express = require('express');
const router = express.Router();

router.get('/:email', get_role);

module.exports = router;
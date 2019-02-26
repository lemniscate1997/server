// All the Required Files and libraries.

const get_role = require('./get_role.action.js');
const express = require('express');
const router = express.Router();

// All the get method routes.

router.get('/:email', get_role);

module.exports = router;
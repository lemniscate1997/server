const express = require("express");
const router = express.Router();

const get_user = require('./get_user.action');
const get_template = require('./get_template.action');
const post_mapping_array = require('./post_mapping_array.action');

router.get('/users', get_user);
router.get('/templates', get_template);

router.post('/mapping/:session_id', post_mapping_array);

module.exports = router;
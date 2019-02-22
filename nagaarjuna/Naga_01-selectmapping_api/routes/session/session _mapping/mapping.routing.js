const express = require("express");
const router = express.Router();

const post_mapping_array = require ('./mapping_array');

const get_user= require('./get_user');
const get_template = require('./get_template');


router.get('/users', get_user);
router.get('/templates',get_template);
router.post('/stm/:session_id',post_mapping_array);

module.exports= router;
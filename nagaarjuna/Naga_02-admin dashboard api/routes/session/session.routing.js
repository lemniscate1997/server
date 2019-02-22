const express = require('express');
const router = express.Router();

const stm_details = require('../session/stm_details.action');
const get_session_by_id = require('./get_session_by_id.action');
const get_mapping_details_by_session_id = require('./get_mapping_details_by_session_id.action');
const get_sessionlist = require('./get_sessionlist.action');
const get_total_sessions = require('./get_total_sessions.action');
const get_total_mapping_count = require('./get_total_mapping_count.action');
const get_mapping_list = require('./get_mapping_list.action');

router.get('/session-details/:session_id', get_session_by_id);
router.get('/session-mapping-details', get_mapping_details_by_session_id);
router.get('/session-list', get_sessionlist);
router.get('/session-count', get_total_sessions);
router.get('/mapping-count',get_total_mapping_count);
router.get('/mapping-list',get_mapping_list);

module.exports = router;
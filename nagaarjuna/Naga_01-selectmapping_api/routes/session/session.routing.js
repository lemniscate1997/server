const express = require('express');
const router = express.Router();

const get_session_by_id = require('./get_session_by_id.action');
const get_mapping_details_by_session_id = require('./get_mapping_details_by_session_id.action');
const get_sessionlist = require('./get_sessionlist.action');
const get_total_sessions = require('./get_total_sessions.action');
const session_mapping = require('./session _mapping/mapping.routing');

router.get('/session-details/:session_id', get_session_by_id);
router.get('/session-mapping-details', get_mapping_details_by_session_id);
router.get('/session-list', get_sessionlist);
router.get('/session-count', get_total_sessions);
router.use('/session-mapping',session_mapping);
module.exports = router;

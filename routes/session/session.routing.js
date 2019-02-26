// All the Required Files and libraries.

const express = require('express');
const router = express.Router();
const get_session_by_id = require('./get_session_by_id.action');
const get_sessionlist = require('./get_sessionlist.action');
const get_total_sessions = require('./get_total_sessions.action');
const get_sessions_name = require('./get_sessions_name.action');
const session_template_mapping_details = require('./session_template_mapping_details.action');
const get_total_mapping_count = require('./get_total_mapping_count.action');
const get_mapping_list = require('./get_mapping_list.action');
const create_session = require('./create_session.action');
const update_session = require('./update_session.action');
const delete_session = require('./delete_session.action');
const session_mapping = require('./session_mapping/mapping.routing');

// All the get method routes.

router.get('/session-details/:session_id', get_session_by_id);
router.get('/session-list', get_sessionlist);
router.get('/session-count', get_total_sessions);
router.get('/session-name', get_sessions_name)
router.get('/session-mapping-details/:session_id', session_template_mapping_details);
router.get('/mapping-count',get_total_mapping_count);
router.get('/mapping-list',get_mapping_list);

// All the Delete Method routes.

router.delete('/session-delete/:session_id',delete_session);

// All the roter uses.

router.use('/session-mapping',session_mapping);

// All the post method routes.

router.post('/create', create_session);

// All the put method routes.

router.put('/updateById/:session_id', update_session);

module.exports = router;

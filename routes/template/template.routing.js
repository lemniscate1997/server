// All the Required Files and libraries.

const express = require('express');
const router = express.Router();
const get_total_templates = require('./get_total_templates.action');
const get_templatelist = require('./get_templatelist.action');
const get_template_by_id = require('./get_template_by_id.action');
const get_templates_name = require('./get_templates_name.action');
const template_insert = require('./template_insert.action.js');
const delete_template = require('./delete_template.action');

// All the get method routes.

router.get("/template-count", get_total_templates);
router.get("/template-details/:template_id", get_template_by_id);
router.get("/template-list", get_templatelist);
router.get("/template-name", get_templates_name);

// All the post method routes.

router.post('/', template_insert);

// All the Delete Method routes.

router.delete("/:template_id", delete_template);

module.exports = router;
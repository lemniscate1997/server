const express = require('express');
const router = express.Router();

const get_total_templates = require('./get_total_templates.action');
const get_templatelist = require('./get_templatelist.action');
const delete_template = require('./delete_template.action');

router.get("/template-count", get_total_templates);
router.get("/template-list", get_templatelist);
router.delete("/:template_id", delete_template);

module.exports = router;
const Joi = require('joi');

var login_email_schema = Joi.object().keys({
    email: Joi.string().email().max(50).required()
});

var session_id_schema = Joi.object().keys({
    session_id: Joi.number().integer().required()
});

var template_id_schema = Joi.object().keys({
    template_id: Joi.number().integer().required()
});

var template_list_schema = Joi.object().keys({
    pageSize: Joi.number().integer().required(),
    pageIndex: Joi.number().integer().required()
});

var session_list_schema = Joi.object().keys({
    pageSize: Joi.number().integer().allow('').optional(),
    pageIndex: Joi.number().integer().allow('').optional(),
    searchName: Joi.string().allow('').max(200).optional(),
    search_by_status: Joi.number().integer().allow('').optional()
});

var mapping_list_schema = Joi.object().keys({
    pageSize: Joi.number().integer().required(),
    pageIndex: Joi.number().integer().required(),
    search: Joi.string().max(200).allow('').optional()
});

var session_createupdate_schema = Joi.object().keys({
    session_name: Joi.string().regex(/^[a-z\d\-_\s]+$/i).required(),
    review_cycle_frequency: Joi.number().integer().required(),
    session_description: Joi.string().allow('').optional(),
    seesion_starting_date: Joi.date().required(),
    session_ending_date: Joi.date().required(),
    created_by: Joi.number().integer().allow('').optional(),
    modified_by: Joi.number().integer().allow('').optional(),
});

module.exports = {
    login_email_schema,
    session_id_schema,
    template_id_schema,
    template_list_schema,
    session_list_schema,
    session_createupdate_schema,
    mapping_list_schema
};
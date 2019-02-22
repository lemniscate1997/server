const Joi = require('joi');

var login_email_schema = Joi.object().keys({
    email : Joi.string().email().required()
});

var session_id_schema = Joi.object().keys({
    session_id : Joi.number().integer().required()
});

var template_delete_schema = Joi.object().keys({
    template_id : Joi.number().integer().required()
});

var template_list_schema = Joi.object().keys({
    pageSize : Joi.number().integer().required(),
    pageIndex : Joi.number().integer().required()
});

var mapping_list_schema = Joi.object().keys({
    pageSize : Joi.number().integer().required(),
    pageIndex : Joi.number().integer().required(),
    search : Joi.string().allow('').optional()
});

module.exports = {
    login_email_schema,
    session_id_schema,
    template_delete_schema,
    template_list_schema,
    mapping_list_schema
};
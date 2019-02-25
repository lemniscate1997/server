const Joi = require('joi');

var session_mappingdetails_schema = Joi.array().items(Joi.object().keys({
    reviewer: Joi.number().required(),
    reviewee: Joi.array().items(Joi.object().keys({ id: Joi.number().integer().required() })),
    template: Joi.number().required()
}));

module.exports = {
    session_mappingdetails_schema
};
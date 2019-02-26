const Joi = require('joi');

async function validate(data, schema, callback) {
    await Joi.validate(data, schema, function (err, value) {
        if (err) {
            err.code = "JOIFALSE";
            return callback(err);
        } else {
            return callback(null, value);
        }
    });
}

module.exports = validate;
const { sessionModel } = require('../../models/index');
const validator = require('../../utils/validation');
const schema = require('../../utils/schemas').session_createupdate_schema;

let created_date = new Date();

create_session = (request, response, next) => {

    validator(request.body, schema, function (err, value) {
        if (err) {
            return next(err);
        }
        else {
            sessionModel.create({
                s_name: request.body.s_name,
                s_frequency: request.body.s_frequency,
                s_description: request.body.s_description,
                s_ending_date: request.body.s_ending_date,
                s_starting_date: request.body.s_starting_date,
                created_by: request.body.created_by,
                created_at: created_date.toISOString()
            })
                .then(() => {
                    response.status(200).send("Session created succesfully !!");
                })
                .catch(err => {
                    next(err);
                });
        }
    });
};

module.exports = create_session;
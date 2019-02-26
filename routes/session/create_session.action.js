const { sessionModel } = require('../../models/index');
const validator = require('../../utils/validation');
const schema = require('../../utils/schemas').session_createupdate_schema;

let created_date = new Date();

create_session = (request, response, next) => {
    validator(request.body, schema, function (error, value) {
        if (error) {
            return next(error);
        }
        else {
            sessionModel.create({
                s_name: request.body.session_name,
                s_frequency: request.body.review_cycle_frequency,
                s_description: request.body.session_description,
                s_ending_date: request.body.session_ending_date,
                s_starting_date: request.body.session_starting_date,
                created_by: request.body.created_by,
                created_at: created_date.toISOString()
            })
                .then(() => {
                    response.status(200).send("Session created succesfully !!");
                })
                .catch(error => {
                    next(error);
                });
        }
    });
};

module.exports = create_session;
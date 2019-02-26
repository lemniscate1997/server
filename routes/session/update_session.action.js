const { sessionModel } = require('../../models/index');
const validator = require('../../utils/validation');
const schema_session = require('../../utils/schemas').session_createupdate_schema;
const schema_session_id = require('../../utils/schemas').session_id_schema;

let modified_date = new Date();

update_session = (request, response, next) => {

    validator(request.params, schema_session_id, function (error, value) {
        if (error) {
            return next(error);
        }
        else{
            validator(request.body, schema_session, function (error, value) {
                if (error) {
                    return next(error);
                }
                else {
                    const updates = {
                        s_name: request.body.session_name,
                        s_frequency: request.body.review_cycle_frequency,
                        s_description: request.body.session_description,
                        s_ending_date: request.body.session_ending_date,
                        s_starting_date: request.body.session_starting_date,
                        modified_by: request.body.modified_by,
                        modified_at: modified_date.toISOString()
                    };
                    sessionModel.update(updates, { where: { s_id: request.params.session_id } })
                        .then(() => {
                            response.status(200).send("Session updated succesfully !!");
                        })
                        .catch(error => {
                            next(error);
                        });
                }
            });
        }
    });
}

module.exports = update_session;
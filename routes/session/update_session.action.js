const { sessionModel } = require('../../models/index');
const validator = require('../../utils/validation');
const schema_session = require('../../utils/schemas').session_createupdate_schema;
const schema_session_id = require('../../utils/schemas').session_id_schema;

let modified_date = new Date();

update_session = (request, response, next) => {

    validator(request.params, schema_session_id, function (err, value) {
        if (err) {
            return next(err);
        }
        else{
            validator(request.body, schema_session, function (err, value) {
                if (err) {
                    return next(err);
                }
                else {
        
                    const updates = {
                        s_name: request.body.s_name,
                        s_frequency: request.body.s_frequency,
                        s_description: request.body.s_description,
                        s_ending_date: request.body.s_ending_date,
                        s_starting_date: request.body.s_starting_date,
                        modified_by: request.body.modified_by,
                        modified_at: modified_date.toISOString()
                    };
                    sessionModel.update(updates, { where: { s_id: request.params.session_id } })
                        .then(() => {
                            response.status(200).send("Session updated succesfully !!");
                        })
                        .catch(err => {
                            next(err);
                        });
                }
            });
        }
    });
}

module.exports = update_session;
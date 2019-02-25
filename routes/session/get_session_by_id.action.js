const model = require('../../models/index');
const validator = require('../../utils/validation');
const schema = require('../../utils/schemas').session_id_schema;

var get_sessionbyid = function (request, response, next) {
    validator(request.params, schema, function (error, value) {
        if (error) {
            next(error);
        }
        else {
            model.sessionModel.findAll({
                attributes: [
                    ['s_id', 'session_id'],
                    ['s_name', 'session_name'],
                    ['s_frequency', 'review_cycle_frequency'],
                    ['s_starting_date', 'session_starting_date'],
                    ['s_ending_date', 'session_ending_date'],
                    ['s_description', 'session_description'],
                    ['s_status', 'session_status']
                ],
                where: { s_id: request.params.session_id }
            })
                .then(result => {
                    response.status(200).json(result);
                })
                .catch((err) => {
                    next(err);
                })
        }
    })
}

module.exports = get_sessionbyid;
const model = require('../../../models/index');
const validator = require('../../../utils/validation');
const schema = require('./session.validation').session_mappingdetails_schema;

const post_mapping_array = (request, response, next) => {

    validator(request.body, schema, function (error, values) {
        if (error) {
            return next(error);
        }
        else {
            data = [];
            request.body.forEach(element => {

                element.reviewee.forEach(function (list) {

                    map_obj = {
                        stm_session_id: Number(request.params.session_id),
                        stm_template_id: element.template,
                        stm_reviewer_id: element.reviewer,
                        stm_reviewee_id: list.id,
                        stm_status: 2,
                        created_by: 275,
                        created_at: ''+new Date()+''
                    }

                    data.push(map_obj);

                });
            });
    
            model.stmModel.bulkCreate(data)
                .then((result) => {
                    
                    response.end()
                })
                .catch(err => {
                    return next(err);
                });


            // response.end();
        }
    });
}
module.exports = post_mapping_array;

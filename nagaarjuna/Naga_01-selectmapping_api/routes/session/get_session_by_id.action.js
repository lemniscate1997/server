const model = require('../../models/index');
const validator = require('../../utils/validation');
const schema = require('../../utils/schemas').session_id_schema;

var get_sessionbyid = function(request , response, next){ 
    validator(request.params, schema, function(error, value){
        if(error){
            next(error);
        }
        else{
            model.sessionModel.findAll({
                where:{s_id: request.params.session_id}
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
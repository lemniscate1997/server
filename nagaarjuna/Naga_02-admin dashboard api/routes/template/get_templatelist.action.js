const model = require('../../models/index');
const validator = require('../../utils/validation');
const schema = require('../../utils/schemas').template_list_schema;

const get_total_templates = (request, response, next) => {
    
    validator(request.query, schema, function(error, value){
        if(error){
            return next(error);
        }
        else{
            let index = request.query.pageIndex;
            let size = request.query.pageSize;
            
            model.templateModel.findAll({
                attributes: [ 't_id', 't_name', 't_structure', 't_description' ],
                offset: (index - 1)*size,
                limit: size,
                where:{t_status: {$ne: 2}},
                order: ['t_id']
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

module.exports = get_total_templates;
const model = require('../../models/index');
const validator = require('../../utils/validation');
const schema = require('../../utils/schemas').template_id_schema;

var get_template_by_id = function (request, response, next) {
    validator(request.params, schema, function (error, value) {
        if (error) {
            next(error);
        } else {
            model.templateModel.findOne({
                    attributes: [
                        ['t_id', 'template_id'],
                        ['t_name', 'template_name'],
                        ['t_structure', 'template_structure']
                    ],
                    where: {
                        t_id: request.params.template_id
                    }
                })
                .then(result => {
                    response.status(200).json(result);
                })
                .catch((error) => {
                    next(error);
                })
        }
    })
}

module.exports = get_template_by_id;
const model = require('../../models/index');
const validator = require('../../utils/validation');
const schema = require('../../utils/schemas').template_id_schema;

const get_total_templates = (request, response, next) => {
    validator(request.params, schema, function (error, value) {
        if (error) {
            next(error);
        } else {
            model.templateModel.update({
                    t_status: 2
                }, {
                    where: {
                        t_id: request.params.template_id
                    }
                })
                .then(result => {
                    response.status(200).json({
                        message: "successfully deleted"
                    });
                })
                .catch((error) => {
                    next(error);
                })
        }
    })
}

module.exports = get_total_templates;
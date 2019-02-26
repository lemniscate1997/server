const model = require('../../../models/index');

const get_template = (request, response, next) => {
    model.templateModel.findAll({
            attributes: [
                ['t_id', 'template_id'],
                ['t_name', 'template_name']
            ]
        })
        .then(result => {
            response.status(200).json(result);
        })
        .catch((error) => {
            next(error);
        })
}

module.exports = get_template;
const model = require('../../models/index');

const get_templates_name = (request, response, next) => {
    model.templateModel.findAll({
            attributes: [
                ['t_name', 'template_name']
            ]
        })
        .then(result => {
            let data = [];
            result.forEach(element => {
                data.push(element.dataValues.template_name);
            });
            response.status(200).json(data);
        })
        .catch((err) => {
            next(err);
        })
}

module.exports = get_templates_name;
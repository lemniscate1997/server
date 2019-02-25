const model = require('../../models/index');

const get_templates_list = (request, response, next) => {

    model.templateModel.findAll({
        attributes: [['t_id', 'template_id'], ['t_name', 'template_name'], ['created_at', 'creation_date'], ['t_description', 'template_description']],
        where: { t_status: { $ne: 2 } },
        order: ['t_id']
    })
        .then(result => {
            response.status(200).json(result);
        })
        .catch((err) => {
            next(err);
        })

}

module.exports = get_templates_list
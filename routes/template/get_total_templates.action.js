const model = require('../../models/index');

const get_total_templates = (request, response, next) => {
    model.templateModel.count({
        col:'t_id'
    })
    .then(result => {
        response.status(200).json({'total':result});
    })
    .catch((err) => {
        next(err);
    })
}

module.exports = get_total_templates;
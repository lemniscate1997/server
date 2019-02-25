const model = require('../../models/index');


const get_total_templates = (request, response, next) => {                        //function to list all sessions

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
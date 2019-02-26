const model = require('../../models/index');

const get_sessions_name = (request, response, next) => {
    model.sessionModel.findAll({
            attributes: ['s_name']
        })
        .then(result => {
            let data = [];
            result.forEach(element => {
                data.push(element.dataValues.s_name);
            });
            response.status(200).json(data);
        })
        .catch((error) => {
            next(error);
        })
}

module.exports = get_sessions_name;
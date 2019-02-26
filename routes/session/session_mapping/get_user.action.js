const model = require('../../../models/index');
const Sequelize = require('sequelize');

const get_user = (request, response, next) => {
    model.userDetailsModel.findAll({
            attributes: ['user_id', [Sequelize.literal("first_name || ' ' || last_name"), 'fullname']]
        })
        .then(result => {
            response.status(200).json(result);
        })
        .catch((error) => {
            next(error);
        })
}

module.exports = get_user;
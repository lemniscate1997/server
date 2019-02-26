const model = require('../../models/index');
const Sequelize = require('sequelize');
const validator = require('../../utils/validation');
const schema = require('../../utils/schemas').login_email_schema;
let jwt = require('jsonwebtoken');
const config = require('../../utils/config');

const get_role = (request, response, next) => {

    validator(request.params, schema, function (error, value) {
        if (error) {
            next(error);
        } else {
            model.userDetailsModel.findOne({
                    where: {
                        email_address: request.params.email
                    },
                    attributes: ['user_id', [Sequelize.literal("first_name || ' ' || last_name"), 'fullname'], 'type', 'is_active'],
                    include: [{
                        model: model.designationModel,
                        required: true,
                        attributes: ['des_name']
                    }]
                })
                .then(result => {
                    if (result !== null) {
                        const token = jwt.sign({
                                Email: request.params.email
                            },
                            config.secret, {
                                expiresIn: '50000'
                            }
                        );
                        response.status(200).json({
                            "user_id": result.user_id,
                            "full_name": result.dataValues.fullname,
                            "role": result.type,
                            "active_status": result.is_active,
                            "designation": result.designation.des_name,
                            "token": token
                        });
                    } else {
                        response.status(200).json({});
                    }
                })
                .catch((error) => {
                    next(error);
                })
        }
    })
}
module.exports = get_role;
const { stmModel, templateModel, userDetailsModel } = require('../../models/index');
const validator = require('../../utils/validation');
const schema = require('../../utils/schemas').session_id_schema;

session_template_mapping_details = (request, response, next) => {

    validator(request.params, schema, (error, value) => {
        if (error) {
            next(error);
        } else {
            stmModel.findAll({
                    where: {
                        stm_session_id: request.params.session_id
                    },
                    include: [{
                            model: userDetailsModel,
                            as: 'reviewer',
                            attributes: [
                                [userDetailsModel.sequelize.literal("reviewer.first_name || ' ' || reviewer.last_name"), 'full_name']
                            ]
                        },
                        {
                            model: userDetailsModel,
                            as: 'reviewee',
                            attributes: [
                                [userDetailsModel.sequelize.literal("reviewee.first_name || ' ' || reviewee.last_name"), 'full_name']
                            ]
                        },
                        {
                            model: templateModel,
                            as: 'templates',
                            attributes: ['t_name']
                        }
                    ]
                })
                .then((result) => {
                    const resp = result.map(temp => {
                        return Object.assign({}, {
                            reviewer_name: temp.reviewer.dataValues.full_name,
                            template_name: temp.templates.t_name,
                            reviewee: temp.reviewee.dataValues.full_name
                        });
                    });
                    return resp;
                })
                .then((result) => {
                    let final = {};
                    result.forEach((obj) => {
                        if (final.hasOwnProperty(obj.reviewer_name)) {
                            let reviewee_obj = final[obj.reviewer_name];
                            if (reviewee_obj.hasOwnProperty(obj.template_name)) {
                                let reviewer_list = reviewee_obj[obj.template_name];
                                reviewer_list.push(obj.reviewee);
                            } else {
                                let reviewer_list = [];
                                reviewer_list.push(obj.reviewee);
                                reviewee_obj[obj.template_name] = reviewer_list;
                            }
                        } else {
                            let innerobj = {};
                            innerobj[obj.template_name] = [obj.reviewee];
                            final[obj.reviewer_name] = innerobj;
                        }
                    });
                    return final;
                })
                .then((result) => {
                    let menu = [];
                    for (var i in result) {
                        for (let j in result[i]) {
                            menu.push({
                                'reviewer_name': i,
                                'template_name': j,
                                'reviewees': result[i][j]
                            });
                        }
                    }
                    response.status(200).json(menu);
                })
                .catch(error => {
                    next(error);
                });
        }
    });
};

module.exports = session_template_mapping_details;
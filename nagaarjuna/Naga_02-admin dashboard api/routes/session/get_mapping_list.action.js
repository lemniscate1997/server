const model = require('../../models/index');
const validation = require('../../utils/validation');
const schema = require('../../utils/schemas').mapping_list_schema;

const get_mapping_list = function (request, response, next) {           //function for getting mapping list
    validation(request.query, schema, function (error, value) {
        if (error) {
            next(error);
        }
        else {
            let index = request.query.pageIndex;
            let size = request.query.pageSize;
            let search = request.query.search;

            model.stmModel.findAll({
                attributes: ['stm_id', 'stm_status'],
                include: [
                    {
                        model: model.userDetailsModel,
                        as: 'reviewee',
                        attributes: [['first_name', 'reviewee_name']]
                    },
                    {
                        model: model.userDetailsModel,
                        as: 'reviewer',
                        attributes: [['first_name', 'reviewer_name']]
                    },
                    {
                        model: model.sessionModel,
                        as: 'sessions',
                        attributes: [['s_name', 'session_name'],'s_status'],
                        where: { s_name: { $ilike: search } },
                        order: [['s_status', 'asc']]
                    }
                ],
                offset: (index - 1) * size,
                limit: size,
                order: [['stm_status', 'desc']],
                // order: [['s_status' , 'sessionModel' , 'asc']]
            })
                .then(result => {
                    data = [];
                    result.forEach(element => {
                        x = {
                            "stm_id": element.stm_id,
                            "session": element.sessions.dataValues.session_name,
                            "reviewee": element.reviewee.dataValues.reviewee_name,
                            "reviewer": element.reviewer.dataValues.reviewer_name,
                            "status": element.stm_status,
                            "session_status": element.sessions.dataValues.s_status
                        }
                        data.push(x);
                    });
                    response.status(200).json(data);
                })
                .catch((err) => {
                    next(err);
                })
        }
    })
}

module.exports = get_mapping_list;
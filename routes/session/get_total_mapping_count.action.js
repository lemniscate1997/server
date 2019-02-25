const model = require('../../models/index');

const total_mapping_count = function (request, response, next) {
    let search = request.query.search || '%';
    model.stmModel.count({
        col: ['stm_id'],
        include: [
            {
                model: model.sessionModel,
                as: 'sessions',
                attributes: [],
                where: { s_name: { $ilike: search } },
            }
        ]
    })
        .then(result => {
            response.status(200).json({ "total": result });
        })
        .catch((error) => {
            next(error);
        });
}

module.exports = total_mapping_count;
const models = require('../../models/index');
const validator = require('../../utils/validation');
const schema = require('../../utils/schemas').session_list_schema;

const get_sessionlist = (request, response, next) => {
    let status = ['active', 'inactive'];
    const page_index = (request.query.pageIndex === undefined) ? 1 : request.query.pageIndex;
    const page_size = (request.query.pageSize === undefined) ? 5 : request.query.pageSize;
    const search_name = request.query.searchName;
    const search_by_status = request.query.search_by_status;
    let where;
    validator(request.query, schema, function (error, value) {

        if (error) {
            return next(error);
        }
        offset = (page_index - 1) * page_size;
        where = {
            s_status: {
                $ne: 3
            }
        }
        if (!!search_name) {
            where = {
                s_status: {
                    $ne: 3
                },
                s_name: {
                    $ilike: search_name
                }
            };
        }
        if (!!search_by_status) {
            where = {
                s_status: search_by_status
            };
        }
        models.sessionModel.findAll({
                attributes: [
                    ['s_id', 'session_id'],
                    ['s_name', 'session_name'],
                    ['s_frequency', 'review_cycle_frequency'],
                    ['s_starting_date', 'session_starting_date'],
                    ['s_ending_date', 'session_ending_date'],
                    ['s_description', 'session_description'],
                    ['s_status', 'session_status']
                ],
                where: where,
                limit: page_size,
                offset: offset,
                order: ['s_id']
            }).then(result => {
                for (let i = 0; i < result.length; i++) {
                    result[i].dataValues.session_status = status[result[i].dataValues.session_status - 1];
                }

                response.status(200).json(result)
            })
            .catch(error => {
                return next(error);
            })
    })
}

module.exports = get_sessionlist;
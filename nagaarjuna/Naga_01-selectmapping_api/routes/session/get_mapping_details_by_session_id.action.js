const pool = require('../../models/index'); 

const get_mapping_details_by_session_id = (request, response, next) => {
    // pageIndex, pageSize and session_id need to be pass as parameters
    pool.query(`select * from get_session_by_id($1) limit $2 offset ($3-1)*$2`, [request.query.session_id, request.query.pageSize, request.query.pageIndex], (err, results) => {
        if (err) {
            throw err;
        }

        response.status(200).json(results.rows)
    })
}

module.exports = get_mapping_details_by_session_id;
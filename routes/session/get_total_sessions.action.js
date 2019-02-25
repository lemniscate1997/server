const models = require('../../models/index');
const validator = require('../../utils/validation');
const schema = require('../../utils/schemas').session_list_schema;

const get_total_sessions = (request, response, next) => {                        //function to list all sessions

    // query giving the list of sessions based on the pagesize and pageindex provided by user in angular
    validator(request.query, schema, function (error, value) {
        if (error) 
            return next(error);
        
            let where;
            where = (request.query.searchName === undefined) ? { s_status: { ne: 3 } } : { s_status: { $ne: 3 }, s_name: { $ilike: request.query.searchName } };

            models.sessionModel.count({
                col: 's_id',
                where: where
            })
                .then(result => {
                    response.status(200).json({ 'total': result });
                })
                .catch((err) => {
                    next(err);
                })
        

    })

}

module.exports = get_total_sessions;


// validator(request.query, schema, function (error, value) {
//     if (error)
//         return next(error);
    

//         let where;
//         where = (request.query.searchName === undefined) ? { s_status: { ne: 3 } } : { s_status: { $ne: 3 }, s_name: { $ilike: request.query.searchName } };

//         models.sessionModel.count({
//             col: 's_id',
//             where: where
//         })
//             .then(result => {
//                 response.status(200).json({ 'total': result });
//             })
//             .catch((err) => {
//                 next(err);
//             })
//         })




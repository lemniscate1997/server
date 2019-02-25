const model = require('../../models/index');

const get_sessions_name = (request, response, next) => {                        //function to list all sessions
    model.sessionModel.findAll({
        attributes:['s_name']   
    })
        .then(result => {
            let data = [];
            
            result.forEach(element => {
                data.push(element.dataValues.s_name);
            });

            response.status(200).json(data);
        })
        .catch((err) => {
            next(err);
        })

}

module.exports = get_sessions_name;
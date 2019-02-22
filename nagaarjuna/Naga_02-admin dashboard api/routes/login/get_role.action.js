const model = require('../../models/index');
const Sequelize = require('sequelize');
const validator = require('../../utils/validation');
const schema = require('../../utils/schemas').login_email_schema;

const get_role = (request, response, next) => {                        //function to list all sessions
    
    validator(request.params, schema, function(error, value){
        if(error){
            next(error);
        }
        else{
            model.userDetailsModel.findOne({
                where:{email_address: request.params.email},
                attributes: ['user_id', [Sequelize.literal("first_name || ' ' || last_name"), 'fullname'], 'type', 'is_active'],
                include: [{
                    model: model.designationModel,
                    required: true,
                    attributes: ['des_name']
                }]
            })
            .then(result => {
                if(result !== null){
                    response.status(200).json({
                        "user_id":result.user_id,
                        "fullname":result.fullname,
                        "type":result.type,
                        "is_active":result.is_active,
                        "des_name":result.designation.des_name
                    });
                }
                else{
                    response.status(200).json({});
                }
            })
            .catch((err) => {
                next(err);
            })
        }
    })
}
module.exports = get_role;
const {templateModel} = require('../../models/index');

template_insert = (req, res,next) => {

    templateModel.create({
        t_name : req.body.t_name,
        t_structure : req.body.t_structure,
        t_description:req.body.t_description,
        created_by:req.body.user_id,
        created_at:new Date()})
        .then((result)=>{
            res.status(200).json("inserted");
        }).catch(error=>{
            next(error);
        });
};

module.exports = template_insert;
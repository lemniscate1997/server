const Sequelize = require('sequelize');
const templatemodel = require('./template');
const session_template_mapping = require('./session_template_mapping');
const sessionUserDetails = require('./session_user_details');
const session = require('./session');
const review = require('./reviews');
const Designation = require('./designation');


const sequelize = new Sequelize('employeedb2', 'postgres', 'argusadmin', {
  host: '192.1.200.74',
  dialect: 'postgres',
  logging:false,
  pool: {
    max: 10,  
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  }
});

//Initialization of serialize models
const designationModel = Designation(sequelize,Sequelize);
const userDetailsModel = sessionUserDetails(sequelize,Sequelize);
const templateModel = templatemodel(sequelize, Sequelize);
const stmModel = session_template_mapping(sequelize,Sequelize);
const sessionModel = session(sequelize,Sequelize);
const reviewModel = review(sequelize,Sequelize);

//Below associations are for the table mapping of database

designationModel.hasMany(userDetailsModel,{foreignKey: 'desg_id',sourceKey:'des_id'});

userDetailsModel.hasMany(templateModel,{foreignKey : 'created_by',sourceKey:'user_id'});
userDetailsModel.hasMany(templateModel,{foreignKey : 'modified_by',sourceKey:'user_id'});

userDetailsModel.hasMany(stmModel,{foreignKey: 'created_by',sourceKey:'user_id'});
userDetailsModel.hasMany(stmModel,{foreignKey: 'modified_by',sourceKey:'user_id'});
userDetailsModel.hasMany(stmModel,{foreignKey: 'stm_reviewee_id',sourceKey:'user_id'});
userDetailsModel.hasMany(stmModel,{foreignKey: 'stm_reviewer_id',sourceKey:'user_id'});
templateModel.hasMany(stmModel,{foreignKey: 'stm_template_id',sourceKey:'t_id'});
sessionModel.hasMany(stmModel,{foreignKey: 'stm_session_id',sourceKey:'s_id'});

userDetailsModel.hasMany(sessionModel,{foreignKey : 'created_by',sourceKey:'user_id'});
userDetailsModel.hasMany(sessionModel,{foreignKey : 'modified_by',sourceKey:'user_id'});

userDetailsModel.hasMany(reviewModel,{foreignKey : 'created_by',sourceKey:'user_id'});
userDetailsModel.hasMany(reviewModel,{foreignKey : 'modified_by',sourceKey:'user_id'});
stmModel.hasMany(reviewModel,{foreignKey : 'r_stm_id',sourceKey:'stm_id'});



userDetailsModel.belongsTo(designationModel,{foreignKey: 'desg_id'});

templateModel.belongsTo(userDetailsModel,{foreignKey : 'created_by',as:'createdBy'});
templateModel.belongsTo(userDetailsModel,{foreignKey : 'modified_by',as:'modifiedBy'});

stmModel.belongsTo(userDetailsModel,{foreignKey: 'created_by',as:'creator'});
stmModel.belongsTo(userDetailsModel,{foreignKey: 'modified_by',as:'modifier'});
stmModel.belongsTo(userDetailsModel,{foreignKey: 'stm_reviewee_id',as:'reviewee'});
stmModel.belongsTo(userDetailsModel,{foreignKey: 'stm_reviewer_id',as:'reviewer'});
stmModel.belongsTo(templateModel,{foreignKey: 'stm_template_id',as:'templates'});
stmModel.belongsTo(sessionModel,{foreignKey: 'stm_session_id',as:'sessions'});

sessionModel.belongsTo(userDetailsModel,{foreignKey : 'created_by',as:'createdBy'});
sessionModel.belongsTo(userDetailsModel,{foreignKey : 'modified_by',as:'modifiedBy'});

reviewModel.belongsTo(userDetailsModel,{foreignKey : 'created_by',as:'createdBy'});
reviewModel.belongsTo(userDetailsModel,{foreignKey : 'modified_by',as:'modifiedBy'});
reviewModel.belongsTo(stmModel,{foreignKey : 'r_stm_id',as:'template'});



module.exports = {userDetailsModel,
                stmModel,
                sessionModel,
                templateModel,
                designationModel};

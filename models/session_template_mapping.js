module.exports = function (sequelize, DataTypes) {
	return sequelize.define('session_template_mapping', {
		stm_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		stm_session_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		stm_template_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		stm_reviewee_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		stm_reviewer_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		stm_status: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '1'
		},
		created_by: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false
		},
		modified_by: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		modified_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'session_template_mapping'
	});
};
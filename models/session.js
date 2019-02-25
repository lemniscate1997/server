
module.exports = (sequelize, DataTypes) => {
	return sequelize.define('session', {
		s_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		s_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		s_frequency: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '2'
		},
		s_starting_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		s_description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		s_ending_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		created_by: {
			type: DataTypes.INTEGER,
			allowNull: true
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
		},
		s_status: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '1'
		}
	}, {
		tableName: 'session'
	});
};



module.exports = (sequelize, DataTypes) => {
	return sequelize.define('system_user_detail', {
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		is_active: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		desg_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		join_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		emp_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		email_address: {
			type: DataTypes.STRING,
			allowNull: true
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		profile_pic: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'system_user_detail'
	});
};


module.exports = (sequelize, DataTypes) => {
	return sequelize.define('designation', {
		des_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		des_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		is_active: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	}, {
		tableName: 'designation'
	});
};

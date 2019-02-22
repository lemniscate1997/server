

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reviews', {
		r_stm_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		r_ans_data: {
			type: DataTypes.JSON,
			allowNull: false
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
		tableName: 'reviews'
	});
};

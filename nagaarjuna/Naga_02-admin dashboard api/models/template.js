module.exports = (sequelize, DataTypes) => {
    return sequelize.define('template', {
        t_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        t_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        t_structure: {
            type: DataTypes.JSON,
            allowNull: false
        },
        t_description: DataTypes.TEXT,
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        modified_by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        modified_at: DataTypes.DATE,

        t_status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '1'
        }
    },
        {
            tableName: 'template'
        });
};
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Service extends Model {}

Service.init (
    {
        id: {
            type:DataTypes.INTEGER,
            allownull:false,
            primaryKey: true,
            autoIncrement: true 
        },
        name: {
            type: DataTypes.STRING,
            allownull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'service'
    }
);

module.exports = Service;
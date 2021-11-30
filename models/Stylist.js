const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stylist extends Model {}

Stylist.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allownull:false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allownull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allownull: false
        },
        service_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'service',
                key: 'id'
            }
        },
        city_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'city',
                key: 'id'
            }
        },
        link_url: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                isURL: true
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'stylist'
    }
);

module.exports = Stylist;
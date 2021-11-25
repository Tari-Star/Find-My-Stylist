const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allownull:false,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: DataTypes.STRING,
            allownull:false
        },
        email:{
            type: DataTypes.STRING,
            allownull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password:{
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [8]
            }
        }
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);
module.exports = User;
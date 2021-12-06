const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const bcrypt = require('bcrypt');

class Stylist extends Model {

    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Stylist.init(
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
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
              },
              async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
              }
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);
module.exports = Stylist;
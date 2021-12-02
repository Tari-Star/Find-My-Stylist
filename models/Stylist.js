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
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
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
        modelName: 'stylist'
    },

);

module.exports = Stylist;
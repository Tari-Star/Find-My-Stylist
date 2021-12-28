const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const bcrypt = require("bcrypt");

class Stylist extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Stylist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allownull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username:{
      type: DataTypes.STRING,
      allownull:false
  },
    service: {
      type: DataTypes.STRING,
      allownull:false
    },
    city: {
      type: DataTypes.STRING,
      allownull:false
    },
    link_url: {
      type: DataTypes.STRING,
      allownull: false,
      validate: {
        isURL: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allownull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allownull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newStylistData) {
        newStylistData.password = await bcrypt.hash(
          newStylistData.password,
          10
        );
        return newStylistData;
      },
      async beforeUpdate(updatedStylistData) {
        updatedStylistData.password = await bcrypt.hash(
          updatedStylistData.password,
          10
        );
        return updatedStylistData;
      },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "stylist",
  }
);

module.exports = Stylist;

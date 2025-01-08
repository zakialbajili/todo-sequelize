'use strict';
const {dbConnection} = require('../../config/dbConnection');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Roles.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:DataTypes.BIGINT
    },
    name: {
      allowNull: false,
      type:DataTypes.STRING
    },
    active: {
      allowNull: false,
      type:DataTypes.BOOLEAN
    }
  }, {
    timestamps:true,
    sequelize: dbConnection,
    modelName: 'Roles',
  });
  return Roles;
};
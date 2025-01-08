'use strict';
const { dbConnection } = require('../../config/dbConnection');
const { Model, DataTypes } = require('sequelize');
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
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  active: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  }
}, {
  timestamps: true,
  sequelize: dbConnection,
  modelName: 'Roles',
});

module.exports = Roles
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    gender: DataTypes.STRING,
    password: DataTypes.STRING,
    emergencymobile: DataTypes.STRING,
    bloodgroup: DataTypes.STRING,
    profile: DataTypes.STRING,
    employeeid: DataTypes.STRING,
    rating: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'employee',
  });
  return employee;
};
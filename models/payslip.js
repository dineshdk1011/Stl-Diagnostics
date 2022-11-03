'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payslip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payslip.init({
    employeeid: DataTypes.STRING,
    url: DataTypes.STRING,
    month: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payslip',
  });
  return Payslip;
};
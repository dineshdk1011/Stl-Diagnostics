'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Labresult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Labresult.init({
    testname: DataTypes.STRING,
    remarks: DataTypes.STRING,
    report: DataTypes.STRING,
    orderid: DataTypes.STRING,
    prescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Labresult',
  });
  return Labresult;
};
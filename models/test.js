'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Test.init({
    testname: DataTypes.STRING,
    testimg: DataTypes.STRING,
    testtid: DataTypes.STRING,
    description: DataTypes.STRING,
    shortdescription: DataTypes.STRING,
    rating: DataTypes.STRING,
    price: DataTypes.STRING,
    offerprice: DataTypes.STRING,
    centerid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};
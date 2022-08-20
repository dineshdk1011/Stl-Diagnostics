'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coupon.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    minamount: DataTypes.STRING,
    maxamount: DataTypes.STRING,
    expirydate: DataTypes.STRING,
    price: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Coupon',
  });
  return Coupon;
};
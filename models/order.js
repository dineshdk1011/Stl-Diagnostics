"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      orderid: DataTypes.STRING,
      testname: DataTypes.STRING,
      testcenter: DataTypes.STRING,
      testid: DataTypes.STRING,
      amount: DataTypes.STRING,
      patientid: DataTypes.STRING,
      userid: DataTypes.STRING,
      status: DataTypes.STRING,
      date: DataTypes.STRING,
      slot: DataTypes.STRING,
      employeeid: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};

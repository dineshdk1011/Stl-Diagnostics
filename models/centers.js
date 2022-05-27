"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Centers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Centers.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      pincode: DataTypes.STRING,
      profilepic: DataTypes.STRING,
      centertid: DataTypes.STRING,
      description: DataTypes.STRING,
      shortdescription: DataTypes.STRING,
      rating: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Centers",
    }
  );
  return Centers;
};

// testid: DataTypes.STRING,
// userid: DataTypes.STRING,
// centerid: DataTypes.STRING,

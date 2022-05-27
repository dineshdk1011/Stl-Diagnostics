'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      testname: {
        type: Sequelize.STRING
      },
      testimg: {
        type: Sequelize.STRING
      },
      testtid: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      shortdescription: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      offerprice: {
        type: Sequelize.STRING
      },
      centerid: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tests');
  }
};
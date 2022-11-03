'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Labresults', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      testname: {
        type: Sequelize.STRING
      },
      remarks: {
        type: Sequelize.STRING
      },
      report: {
        type: Sequelize.STRING
      },
      orderid: {
        type: Sequelize.STRING
      },
      prescription: {
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
    await queryInterface.dropTable('Labresults');
  }
};
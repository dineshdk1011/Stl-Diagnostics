'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      enquiry: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      resonse: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      userid: {
        type: Sequelize.STRING
      },
      employeeid: {
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
    await queryInterface.dropTable('Tickets');
  }
};
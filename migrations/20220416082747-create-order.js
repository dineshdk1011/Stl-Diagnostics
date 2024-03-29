"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderid: {
        type: Sequelize.STRING,
      },
      testname: {
        type: Sequelize.STRING,
      },
      employeeid: {
        type: Sequelize.STRING,
      },
      testcenter: {
        type: Sequelize.STRING,
      },
      testid: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.STRING,
      },
      discount: {
        type: Sequelize.STRING,
      },
      patientid: {
        type: Sequelize.STRING,
      },
      userid: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.STRING,
      },
      slot: {
        type: Sequelize.STRING,
      },
      result: {
        type: Sequelize.STRING,
      },
      review: {
        type: Sequelize.STRING,
      },
      center_rating: {
        type: Sequelize.STRING,
      },
      employee_rating: {
        type: Sequelize.STRING,
      },
      employee_allocate: {
        type: Sequelize.STRING,
      },
      employee_cancel: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};

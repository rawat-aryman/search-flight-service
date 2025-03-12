'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightId: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      departureAirportId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      arrivalAirportId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      departureTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      arrivalTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      terminal: {
        type: Sequelize.INTEGER
      },
      remainingSeats: {
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      airplaneId: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Flights');
  }
};
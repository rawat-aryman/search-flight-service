'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: "A380",
        Capacity: 300,
        Manufacturer: "Airbus",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: "DC-9 Super 80",
        Capacity: 350,
        Manufacturer: "McDonnell Douglass",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: "A350 XWB",
        Capacity: 370,
        Manufacturer: "Airbus",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: "Boeing 747",
        Capacity: 250,
        Manufacturer: "Boeing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: "Embraer ERJ",
        Capacity: 320,
        Manufacturer: "Embraer",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: "A380 - 237",
        Capacity: 300,
        Manufacturer: "Airbus",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: "CRJ100",
        Capacity: 340,
        Manufacturer: "Bombardier",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: "Boeing 757",
        Capacity: 290,
        Manufacturer: "Boeing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: "Boeing 767",
        Capacity: 300,
        Manufacturer: "Boeing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: "Boeing 787 Dreamliner",
        Capacity: 220,
        Manufacturer: "Boeing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: "A330",
        Capacity: 320,
        Manufacturer: "Airbus",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

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

    await queryInterface.bulkInsert('Airports', [{
      name: "Airport 1",
      cityId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Airport 2",
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Airport 3",
      cityId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Airport 4",
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
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

"use strict";
const { Op } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Airplanes", [
      {
        modelNumber: "airbus380",
        capacity: 330,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "boing777",
        capacity: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Airplanes", {
      [Op.or]: [{ modelNumber: "boing777" }, { modelNumber: "airbus777" }],
    }); // Op is operator provided by sequelize Op.or used as a condition where modelNumber: {} delete it.
  },
};

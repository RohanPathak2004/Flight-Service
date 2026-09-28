"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {

      async up(queryInterface,Sequelize) {
            await queryInterface.addConstraint('Airports',{
                  type: 'FOREIGN KEY',
                  fields: ['cityId'],
                  name: 'city_foreign_key_constraint',
                  references: {
                        table: 'Cities',
                        field: 'id'
                  },
                  onUpdate: 'CASCADE',
                  onDelete: 'CASCADE'
            });
      }
      ,

      async down(queryInterface, Sequelize) {
            /**
             * Add reverting commands here.
             *
             * Example:
             * await queryInterface.dropTable('users');
             */
            await queryInterface.removeConstraint('Airports', 'city_foreign_key_constraint');
      },
};
 
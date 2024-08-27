'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Events', 'contactNo', 'phoneNumber');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Events', 'phoneNumber', 'contactNo');
  }
};

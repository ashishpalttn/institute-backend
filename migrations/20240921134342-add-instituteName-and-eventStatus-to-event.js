'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Events', 'instituteName', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'Unknown Institute', // Set a default value
    });
    await queryInterface.addColumn('Events', 'eventStatus', {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Events', 'instituteName');
    await queryInterface.removeColumn('Events', 'eventStatus');
  }
};

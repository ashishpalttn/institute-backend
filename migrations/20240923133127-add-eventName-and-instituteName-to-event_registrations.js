'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('event_registrations','eventName',{
      type : Sequelize.STRING,
      defaultValue: 'Unknown Event'
    })
    await queryInterface.addColumn('event_registrations','instituteName',{
      type: Sequelize.STRING,
      defaultValue: "Unknown Institute"
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('event_registrations','eventName');
    await queryInterface.removeColumn('event_registrations','instituteName');
  }
};

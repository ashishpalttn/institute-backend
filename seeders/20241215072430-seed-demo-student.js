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
    await queryInterface.bulkInsert('Students', [
      {
        studentName: 'John Doe',
        fatherName: 'Mr. Doe',
        motherName: 'Mrs. Doe',
        address: '123 Elm Street',
        mobileNo: '1234567890',
        parentMobileNo: '0987654321',
        email: 'johndoe@example.com',
        className: '12th',
        section: 'A',
        admissionDate: '2024-12-01',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Students', null, {});
  }
};

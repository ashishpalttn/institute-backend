module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Events', 'eventStatus', {
      type: Sequelize.STRING,
      allowNull: false, // keep it false if you want this field to be required
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Events', 'eventStatus', {
      type: Sequelize.BOOLEAN,
      allowNull: false, // this is the original type
    });
  },
};

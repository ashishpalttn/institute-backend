'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    eventName: DataTypes.STRING,
    eventType: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    eventLogo: DataTypes.STRING,
    eventHead: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    contactEmail: DataTypes.STRING,
    instituteName: {
      type: DataTypes.STRING,
      allowNull: false // Add validation if needed
    },
    eventStatus: {
      type: DataTypes.STRING,
      defaultValue: true // Set a default value if required
    },
    fee: {
      type: DataTypes.INTEGER,
      allowNull: true 
    }

  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
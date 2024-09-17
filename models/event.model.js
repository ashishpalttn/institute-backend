module.exports = (sequelize, DataTypes) => {
  return sequelize.define('EventRegistration', {
    studentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    studentClass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    guardianName: {
      type: DataTypes.STRING,
    },
    shortNote: {
      type: DataTypes.TEXT,
    },
  }, {
    timestamps: true,
    tableName: 'event_registrations',
  });
};

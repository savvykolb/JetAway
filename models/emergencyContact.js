module.exports = function (sequelize, DataTypes) {
  const emergencyContact = sequelize.define('emergencyContact', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    relationship: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.INTEGER
    },
  });

  return emergencyContact;
};
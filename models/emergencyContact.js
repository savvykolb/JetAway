const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class EmergencyContact extends Model {}

EmergencyContact.init(
    {
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
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'emergencyContact',
      }
);

module.exports = EmergencyContact;
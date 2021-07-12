const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class emergencyContact extends Model {}

emergencyContact.init(
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

module.exports = emergencyContact;
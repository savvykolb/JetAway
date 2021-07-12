const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class trip extends Model {}

trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          destinationName: {
              type: DataTypes.STRING
          },
          description: {
              type: DataTypes.TEXT
          },
          departure: {
            type: DataTypes.INTEGER
          },
          arrival: {
            type: DataTypes.INTEGER
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trip',
      }
);

module.exports = trip;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

class North extends Model {}

North.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          destination_name: {
            type: DataTypes.STRING
          },
          url: {
            type: DataTypes.STRING,
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
        modelName: 'north',
      }
);

module.exports = North;
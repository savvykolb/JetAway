const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

class South extends Model {}

South.init(
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
            type: DataTypes.STRING
          },
          arrival: {
            type: DataTypes.STRING
          },
          
         
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'south',
      }
);

module.exports = South;
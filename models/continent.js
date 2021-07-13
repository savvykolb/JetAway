const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Continent extends Model {}

Continent.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      continentName:{
          type: DataTypes.STRING,
          allownull: false
      },
      timeZone:{
          type: DataTypes.STRING,
          allownull: false
      },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'continent',
      }
)

module.exports = Continent;
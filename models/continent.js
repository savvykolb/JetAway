const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class continent extends Model {}

continent.init({
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

module.exports = continent;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class picture extends Model{}

picture.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'picture',
      }
)

module.exports = picture;
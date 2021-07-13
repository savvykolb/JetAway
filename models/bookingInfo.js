const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class BookingInfo extends Model {}

BookingInfo.init(
    {
        address: {
            type: DataTypes.STRING,
            allowNull:false
        },
        cityTown: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        Bday: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'bookingInfo',
      }
);

module.exports = BookingInfo;
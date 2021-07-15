const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class BookingInfo extends Model {}

BookingInfo.init(
    {
        firstName: {
            type: DataTypes.STRING
          },
          lastName: {
            type: DataTypes.STRING
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
          },
          phoneNumber: {
              type: DataTypes.INTEGER,
              allowNull: true,
              unique: {
                args: true,
              msg: 'User already exists'
              },
          },
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
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        Bday: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        emergencyFirstName: {
            type: DataTypes.STRING
          },
        emergencyLastName: {
            type: DataTypes.STRING
          },
        emergencyRelationship: {
            type: DataTypes.STRING
          },
        emergencyPhoneNumber: {
            type: DataTypes.INTEGER
          },
        destination: {
            type: DataTypes.STRING, 
            allowNull:false,
        }
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
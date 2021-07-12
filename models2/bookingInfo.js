
module.exports = function (sequelize, DataTypes) {
    const bookingInfo = sequelize.define('bookingInfo', {
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
    });

    bookingInfo.associate = function (models) {
      bookingInfo.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return bookingInfo;
};
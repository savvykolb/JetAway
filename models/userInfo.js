
module.exports = function (sequelize, DataTypes) {
    const userInfo = sequelize.define('userInfo', {
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

    userInfo.associate = function (models) {
      userInfo.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return userInfo;
};
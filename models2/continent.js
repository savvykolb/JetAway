module.exports = function (sequelize, DataTypes) {
    const continent = sequelize.define('continent', {

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
    });
    continent.associate = function (models) {
        continent.hasMany(models.trip, {
      as: 'trip'
        });
      };
    return continent;
  };
  
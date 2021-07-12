module.exports = function (sequelize, DataTypes) {
    const recommendation = sequelize.define('recommendation', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      recommendationTxt: {
          type: DataTypes.TEXT
      }
    });
  
    return recommendation;
  };
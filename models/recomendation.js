module.exports = function (sequelize, DataTypes) {
    const recomendation = sequelize.define('recomendation', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      reconmendationTxt: {
          type: DataTypes.TEXT
      }
    });
  
    return recomendation;
  };
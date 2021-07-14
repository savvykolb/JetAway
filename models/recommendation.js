const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Recommendation extends Model {}

Recommendation.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  recommendationTxt: {
    type: DataTypes.TEXT,
  },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recommendation',
  }
);

module.exports = Recommendation;

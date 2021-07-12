const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class recommendation extends Model {}

recommendation.init({
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

module.exports = recommendation;

module.exports = function (sequelize, DataTypes) {
    const trip = sequelize.define('trip', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      destinationName: {
          type: DataTypes.STRING
      },
      description: {
          type: DataTypes.TEXT
      },
      departure: {
        type: DataTypes.INTEGER
      },
      arrival: {
        type: DataTypes.INTEGER
      }
    });
    trip.associate = function (models) {
        trip.hasMany(models.recommendation, {
      onDelete: 'cascade'
        });
      };
    return trip;
  };

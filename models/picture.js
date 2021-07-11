module.exports = function (sequelize, DataTypes) {
    const picture = sequelize.define('picture', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING,
        },
        
    })
    picture.associate = function (models) {
        picture.belongsTo(models.trip, {
      onDelete: 'cascade'
        });
      };
        return picture;
}
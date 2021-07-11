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
        alt: {
            type: DataTypes.STRING,
        }
    })

    return picture;
}
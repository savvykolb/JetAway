const BookingInfo = require('./bookingInfo');
const Continent = require('./continent');
const Recommendation = require('./recommendation');
const Trip = require('./trip');
const Asia = require('./asia');
const Australia = require('./australia');
const Africa = require('./africa');
const Europe = require('./Europe');
const North = require('./north');
const South = require('./South');

const User = require('./user');

Continent.hasMany(Trip,{
    onDelete:'CASCADE'
});

Trip.belongsTo(Continent,{
    // foreignKey: 'continent_id',
    onDelete:'CASCADE'
});

Trip.hasMany(Recommendation, {
    onDelete:'CASCADE'
});
Asia.belongsTo(Continent,{
    onDelete:'CASCADE'
});

Asia.hasMany(Recommendation, {
    onDelete:'CASCADE'
});
Africa.belongsTo(Continent,{
    onDelete:'CASCADE'
});

Africa.hasMany(Recommendation, {
    onDelete:'CASCADE'
});
Australia.belongsTo(Continent,{
    onDelete:'CASCADE'
});

Australia.hasMany(Recommendation, {
    onDelete:'CASCADE'
});
Europe.belongsTo(Continent,{
    onDelete:'CASCADE'
});

Europe.hasMany(Recommendation, {
    onDelete:'CASCADE'
});
South.belongsTo(Continent,{
    onDelete:'CASCADE'
});

South.hasMany(Recommendation, {
    onDelete:'CASCADE'
});
North.belongsTo(Continent,{
    onDelete:'CASCADE'
});

North.hasMany(Recommendation, {
    onDelete:'CASCADE'
});

Recommendation.belongsTo(Trip,{
    // foreignKey: 'trip_id',
    onDelete:'CASCADE'
});

User.hasMany(BookingInfo, {
    onDelete:'CASCADE'
});

BookingInfo.belongsTo(User, {
    onDelete:'CASCADE'
});

module.exports = {BookingInfo, Continent, Recommendation, Trip,Asia,Africa, Australia,North, South, Europe,  User}
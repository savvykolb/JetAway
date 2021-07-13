const BookingInfo = require('./bookingInfo');
const Continent = require('./continent');
const Recommendation = require('./recommendation');
const Trip = require('./trip');
const User = require('./user');

Continent.hasMany(Trip,{
    onDelete:'CASCADE'
});

Trip.belongsTo(Continent,{
    onDelete:'CASCADE'
});

Trip.hasMany(Recommendation, {
    onDelete:'CASCADE'
});

Recommendation.belongsTo(Trip,{
    onDelete:'CASCADE'
});

User.hasMany(BookingInfo, {
    onDelete:'CASCADE'
});

BookingInfo.belongsTo(User, {
    onDelete:'CASCADE'
});

module.exports = {BookingInfo, Continent, Recommendation, Trip, User}
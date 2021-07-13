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


module.exports = {BookingInfo, Continent, Recommendation, Trip, User}
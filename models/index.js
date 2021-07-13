const BookingInfo = require('./bookingInfo');
const Continent = require('./continent');
const EmergencyContact = require('./emergencyContact');
const Recommendation = require('./recommendation');
const Trip = require('./trip');
const User = require('./user');

Continent.hasMany(Trip,{
    onDelete:'CASCADE'
});

Trip.belongsTo(Continent,{
    onDelete:'CASCADE'
});


module.exports = {BookingInfo, Continent, EmergencyContact, Recommendation, Trip, User}
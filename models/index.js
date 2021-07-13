const bookingInfo = require('./bookingInfo');
const continent = require('./continent');
const emergencyContact = require('./emergencyContact');
const recommendation = require('./recommendation');
const trip = require('./trip');
const user = require('./user');

continent.hasMany(trip,{
    onDelete:'CASCADE'
});

trip.belongsTo(continent,{
    onDelete:'CASCADE'
});


module.exports = {bookingInfo, continent, emergencyContact, recommendation, trip, user}
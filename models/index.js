const bookingInfo = require('./bookingInfo');
const continent = require('./continent');
const emergencyContact = require('./emergencyContact');
const picture = require('./picture');
const recommendation = require('./recommendation');
const trip = require('./trip');
const user = require('./user');

continent.hasMany(trip,{
    foreignKey: 'continent_id',
    onDelete:'CASCADE'
});


module.exports = {bookingInfo, continent, emergencyContact, picture, recommendation, trip, user}
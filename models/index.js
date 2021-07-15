const BookingInfo = require('./bookingInfo');
const Asia = require('./asia');
const Australia = require('./australia');
const Africa = require('./africa');
const Europe = require('./europe');
const North = require('./north');
const South = require('./south');
const User = require('./users');

User.hasMany(BookingInfo, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

BookingInfo.belongsTo(User, {
    onDelete:'CASCADE'
});

module.exports = {BookingInfo,Asia,Africa, Australia,North, South, Europe, User};
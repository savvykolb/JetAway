const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookingInfoRoutes = require('./bookingInfoRoutes');


router.use('/user', userRoutes);
router.use('/bookingInfo', bookingInfoRoutes);

module.exports = router;
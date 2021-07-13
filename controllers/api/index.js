const router = require('express').Router();
// const recommendationRoutes = require('./recommendationRoutes');
// const tripRoutes = require('./tripRoutes');
const userRoutes = require('./userRoutes');
const bookingInfoRoutes = require('./bookingInfoRoutes');

// router.use('/recommendation', recommendationRoutes);
// router.use('/trip', tripRoutes);
router.use('/user', userRoutes);
router.use('/bookingInfo', bookingInfoRoutes);

module.exports = router;
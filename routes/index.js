const router = require('express').Router();
const homepageRoutes = require('./homepageRoutes');
const recommendationRoutes = require('./recommendationRoutes');
const sessionRoutes = require('./sessionRoutes');
const tripRoutes = require('./tripRoutes');
const userRoutes = require('./userRoutes');
const bookingInfoRoutes = require('./bookingInfoRoutes');

router.use('/homepage', homepageRoutes);
router.use('/recommendation', recommendationRoutes);
router.use('/session', sessionRoutes);
router.use('/trip', tripRoutes);
router.use('/user', userRoutes);
router.use('/bookingInfo', bookingInfoRoutes);

module.exports = router;
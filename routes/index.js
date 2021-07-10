const router = require('express').Router();
const continentRoutes = require('./continentRoutes');
const recommendationRoutes = require('./recommendationRoutes');
const sessionRoutes = require('./sessionRoutes');
const tripRoutes = require('./tripRoutes');
const userRoutes = require('./userRoutes');
const bookingInfoRoutes = require('./bookingInfoRoutes');

router.use('/continent', continentRoutes);
router.use('/recommendation', recommendationRoutes);
router.use('/session', sessionRoutes);
router.use('/trip', tripRoutes);
router.use('/user', userRoutes);
router.use('/bookingInfo', bookingInfoRoutes);

module.exports = router;
const router = require('express').Router();
const continentRoutes = require('./continentRoutes');
const recommendationRoutes = require('./recommendationRoutes');
const sessionRoutes = require('./sessionRoutes');
const tripRoutes = require('./tripRoutes');
const userRoutes = require('./userRoutes');
const userInfoRoutes = require('./userInfoRoutes');

router.use('/continent', continentRoutes);
router.use('/recommendation', recommendationRoutes);
router.use('/session', sessionRoutes);
router.use('/trip', tripRoutes);
router.use('/user', userRoutes);
router.use('/userInfo', userInfoRoutes);

module.exports = router;
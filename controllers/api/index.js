const router = require('express').Router();
const userRoutes = require('./userRoutes');
const restaurantRoutes = require('./restaurantRoutes');


// /api routes, mainly update create and deletes

router.use('/user', userRoutes);
router.use('/restaurant', restaurantRoutes);


module.exports = router;

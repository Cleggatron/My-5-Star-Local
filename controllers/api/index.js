const router = require('express').Router();
const userRoutes = require('./userRoutes');
const restaurantRoutes = require('./res');


// /api routes, mainly update create and deletes

router.use('/user', userRoutes);
// router.use('/restaurant', postRoutes);


module.exports = router;

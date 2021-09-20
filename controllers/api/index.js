const router = require('express').Router();
const userRoutes = require('./userRoutes');
const restaurantRoutes = require('./restaurantRoutes');
const reviewRoutes = require("./reviewRoutes");



// /api routes, mainly update create and deletes

router.use('/user', userRoutes);
router.use('/restaurant', restaurantRoutes);
router.use("/review", reviewRoutes)


module.exports = router;

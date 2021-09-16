const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');


// /api routes, mainly update create and deletes

router.use('/user', userRoutes);
router.use('/restaurants', postRoutes);

module.exports = router;

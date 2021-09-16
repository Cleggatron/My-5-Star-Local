const sequelize = require('../config/connection');
const seedUser = require('./UserData');
const seedRestaurant = require('./RestaurantData');
const seedReview = require('./ReviewData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedRestaurant();

  await seedReview();

  process.exit(0);
};

seedAll();
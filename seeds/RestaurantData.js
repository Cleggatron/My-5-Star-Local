const { Restaurant } = require('../models');

const RestaurantData = [
    {
        name: 'A test chinese',
        bio: 'A bio of a test chinese',
        location: 'holy terra',
        website: 'www.goldenthrone.co.uk',
        owner_id: 1,
      },

      {
        name: 'A test chicken shop',
        bio: 'A bio of a test chicken shop',
        location: 'Birmingham',
        website: 'www.testchickenshop.com',
        owner_id: 2,
      },
      {
        name: 'A test pizza shop',
        bio: 'A bio of a test pizza shop',
        location: 'Manchester',
        website: 'www.testpizzashop.co.uk',
        owner_id: 3,
      },
];

const seedRestaurant = () => Restaurant.bulkCreate(RestaurantData);

module.exports = seedRestaurant;
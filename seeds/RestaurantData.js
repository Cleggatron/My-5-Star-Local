const { Restaurant } = require('../models');

const RestaurantData = [
    {
        name: 'golden throne',
        bio: 'the emperor protects and in this case feeds too!',
        location: 'holy terra',
        website: 'www.terratakeaways.co.uk',
        owner_id: 1,
      },

      {
        name: 'Ultramar chicken shack',
        bio: 'I saw roboute here, he ate 6 chickens',
        location: 'Ultramar',
        website: 'www.Ultramarchickenshack.co.uk',
        owner_id: 2,
      },
];

const seedRestaurant = () => Restaurant.bulkCreate(RestaurantData);

module.exports = seedRestaurant;
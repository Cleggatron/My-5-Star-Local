const { Review } = require('../models');

const ReviewData = [
    {
        text: 'A test review 1.',
        rating: 5,
        user_id: 1,
        restaurant_id: 1,
      },
      {
        text: 'A test review 2.',
        rating: 5,
        user_id: 2,
        restaurant_id: 1,
      },
      {
        text: 'A test review 3.',
        rating: 1,
        user_id: 3,
        restaurant_id: 1,
      },

      {
        text: 'A test review 4',
        rating: 1,
        user_id: 1,
        restaurant_id: 2,
      },
      {
        text: 'A test review 5',
        rating: 5,
        user_id: 2,
        restaurant_id: 2,
      },
      {
        text: 'A test review 6',
        rating: 2,
        user_id: 3,
        restaurant_id: 2,
      },
      {
        text: 'A test review 7',
        rating: 5,
        user_id: 1,
        restaurant_id: 3,
      },
      {
        text: 'A test review 8',
        rating: 1,
        user_id: 2,
        restaurant_id: 3,
      },
      {
        text: 'A test review 9',
        rating: 5,
        user_id: 3,
        restaurant_id: 3,
      },
];

const seedReview = () => Review.bulkCreate(ReviewData);

module.exports = seedReview;

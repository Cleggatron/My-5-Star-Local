const { Review } = require('../models');

const ReviewData = [
    {
        text: 'I had the pie, I like pie.',
        rating: 5,
        user_id: 1,
        restaurant_id: 1,
      },

      {
        text: 'let them eat cake',
        rating: 2,
        user_id: 2,
        restaurant_id: 2,
      },
];

const seedReview = () => Review.bulkCreate(ReviewData);

module.exports = seedReview;

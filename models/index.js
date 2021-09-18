// import models
const Restaurant = require('./Restaurant');
const Review = require('./Review');
const User = require('./User');

Restaurant.hasMany(Review, {
    foreignKey: 'Restaurant_id',
    onDelete: 'CASCADE',
})

Review.belongsTo(Restaurant, {
  foreignKey: 'Restaurant_id',
});

Review.belongsTo(User, {
  foreignKey: 'User_id',
});


User.hasMany(Review, {
    foreignKey: 'User_id',
    onDelete: 'CASCADE',
  });
   

// User has many Restaurant(s)
User.hasMany(Restaurant, {
  foreignKey: 'User_id',
  onDelete: 'CASCADE',
});

Restaurant.belongsTo(User, {
  foreignKey: 'User_id',
});




module.exports = {
    User,
    Restaurant,
    Review,
};

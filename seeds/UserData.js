const { User } = require('../models');

const UserData = [
    {
        name: 'CaptainBadger',
        email: 'cptBadger@badgerworld.com',
        password: 'badger1234',
      },
      {
        name: 'nathanielgarro',
        email: 'eisensteincommanddeck@deathguard.com',
        password: 'FUtyphus!',
      },
];

const seedUser = () => User.bulkCreate(UserData, {
individualHooks: true,
returning: true
});

module.exports = seedUser;
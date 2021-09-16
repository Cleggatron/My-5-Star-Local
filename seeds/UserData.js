const { User } = require('../models');

const UserData = [
    {
        name: 'CaptainBadger',
        email: 'cptBadger@badgerworld.com',
        pw: 'badger1234',
      },
      {
        name: 'nathanielgarro',
        email: 'eisensteincommanddeck@deathguard.com',
        pw: 'FUtyphus!',
      },
];

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;
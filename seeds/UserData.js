const { User } = require('../models');

const UserData = [
    {
        name: 'Atestuser',
        email: 'Atestuser@test.com',
        password: 'test1234',
      },
      {
        name: 'Asecondtestuser',
        email: 'Asecondtestuser@test.com',
        password: 'test1234',
      },
      {
        name: 'Athirdtestuser',
        email: 'Athirdtestuser@test.com',
        password: 'test1234',
      },
];

const seedUser = () => User.bulkCreate(UserData, {
individualHooks: true,
returning: true
});

module.exports = seedUser;
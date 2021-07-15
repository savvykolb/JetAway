const { User} = require('../models');

const userData = [

    {
      "name": "Noah",
      "email": "sal@hotmail.com",
      "password": "password12345"
    },
    {
      "name": "Tom",
      "email": "lernantino@gmail.com",
      "password": "password12345"
    },
    {
      "name": "Alyssa",
      "email": "amiko2k20@aol.com",
      "password": "password12345"
    },
    {
      "name": "Fatimah",
      "email": "kjordan99@msn.com",
      "password": "password12345"
    },
    {
      "name": "Savannah",
      "email": "the_blake@yahoo.com",
      "password": "password12345"
    },
    {
        "name": "Summer",
        "email": "lthe_blake@yahoo.com",
        "password": "password12345"
      },
      {
        "name": "Naomi",
        "email": "fthe_blake@yahoo.com",
        "password": "password12345"
      }
  ];

  const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser

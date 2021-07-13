const sequelize = require('../config/config');
const {Trip, Continent} = require('../models');

const continentData = require('./continentData.json');
const tripData = require('./tripData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  const continent = await Continent.bulkCreate(continentData, {
    individualHooks: true,
    returning: true,
  });

  for (const { id } of continent) {
    const trip = await Trip.bulkCreate(tripData, {
      individualHooks: true,
    returning: true,
    });
  }

  process.exit(0);
};

seedDatabase();
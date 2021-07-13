const seedTrips = require('./tripData');
const seedContinents = require('./continentData')
const sequelize = require('../config/config');
// const {Trip, Continent} = require('../models');

// const continentData = require('./continentData.json');
// const tripData = require('./tripData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedTrips();
  console.log('\n----- TRIPS SEEDED -----\n');
  await seedContinents();
  console.log('\n----- CONTINENTS SEEDED -----\n');

  // const continent = await Continent.bulkCreate(continentData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // for (const { id } of continent) {
  //   const trip = await Trip.bulkCreate(tripData, {
  //     individualHooks: true,
  //   returning: true,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
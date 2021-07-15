const seedTrips = require('./tripData');
const seedAsia = require('./asiaData');
const seedEurope = require('./europeData');
const seedAfrica = require('./africaData');
const seedNorth = require('./northData');
//checked


// const userData = require('./userData.json');
const seedSouth = require('./southData');
const seedAustralia = require('./australiaData');

const seedUser = require('./userData');
const sequelize = require('../config/config');




const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedEurope();
    console.log('\n----- EUROPE SEEDED -----\n');

    await seedNorth();
    console.log('\n----- NORTH SEEDED -----\n');

    await seedSouth();
    console.log('\n----- SOUTH SEEDED -----\n');

    await seedAustralia();
    console.log('\n----- AUSTRALIA SEEDED -----\n');

    await seedAfrica();
    console.log('\n----- AFRICA SEEDED -----\n');

    await seedAsia();
    console.log('\n----- ASIA SEEDED -----\n');
    
    await seedTrips();
    console.log('\n----- TRIPS SEEDED -----\n');
    
    await seedUser();
    console.log("++++++++++++++++++++++++++++++")
   

    process.exit(0);
};


// const seedDatabase = () =>{
//     sequelize.sync({ force: true });
//     console.log('\n----- DATABASE SYNCED -----\n');
    
//     setTimeout(() => {
//         seedContinents();
//         console.log('\n----- CONTINENTS SEEDED -----\n');
        
//     }, 1000);
    
//     setTimeout(() => {
//         seedTrips();
//         console.log('\n----- TRIPS SEEDED -----\n');
        
//     }, 2000);
    
//     setTimeout(() => {
//         seedRecommendation();
//         console.log('\n----- RECOMMENDATION SEEDED -----\n');
        
//     }, 3000 );
// }

seedDatabase();

// const {Trip, Continent} = require('../models');

// const continentData = require('./continentData.json');
// const tripData = require('./tripData');
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
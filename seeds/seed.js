const seedTrips = require('./tripData');
const seedContinents = require('./continentData')
const seedRecommendation = require('./recommendationData')
const sequelize = require('../config/config');

// const seedDatabase = async () => {
//     await sequelize.sync({ force: true });
//     console.log('\n----- DATABASE SYNCED -----\n');

//     await seedContinents();
//     console.log('\n----- CONTINENTS SEEDED -----\n');

//     await seedTrips();
//     console.log('\n----- TRIPS SEEDED -----\n');

//     await seedRecommendation();
//     console.log('\n----- RECOMMENDATION SEEDED -----\n');
    
//     process.exit(0);
// };


const seedDatabase = () =>{
    sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    setTimeout(() => {
        seedContinents();
        console.log('\n----- CONTINENTS SEEDED -----\n');
        
    }, 1000);
    
    setTimeout(() => {
        seedTrips();
        console.log('\n----- TRIPS SEEDED -----\n');
        
    }, 2000);
    
    setTimeout(() => {
        seedRecommendation();
        console.log('\n----- RECOMMENDATION SEEDED -----\n');
        
    }, 3000 );
}

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
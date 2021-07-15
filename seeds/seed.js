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
    await sequelize.sync({ force: false });
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
    
    await seedUser();
    console.log("++++++++++++++++++++++++++++++")
   

    process.exit(0);
};

seedDatabase();
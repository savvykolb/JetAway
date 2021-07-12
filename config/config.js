

// module.exports = {
//   development: {
//     username: process.env.SEQUELIZE_USER,
//     password: process.env.SEQUELIZE_PASSWORD,
//     database: 'project2_dev',
//     dialect: 'mysql',
//     host: process.env.SEQUELIZE_HOST,
//     port: 3306
//   },
//   test: {
//     username: process.env.TU,
//     password: process.env.TP || null,
//     database: 'project2_test',
//     host: 'localhost',
//     port: 3306,
//     dialect: 'mysql',
//     logging: false
//   },
//   production: {
//     'use_env_variable': 'JAWSDB_URL',
//     dialect: 'mysql'
//   }
// };

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.SEQUELIZE_USER,
    process.env.SEQUELIZE_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;

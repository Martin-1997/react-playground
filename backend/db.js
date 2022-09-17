// Using pg for traditional SQL commands
// const Pool = require("pg").Pool;
// const pool = new Pool({
//     user: "postgres",
//     password: "password",
//     host: "localhost",
//     port: 54320,
//     database: "flightapp"
// });
// module.exports = pool;


// Using Sequelize as an ORM mapper for PG
// https://stackoverflow.com/questions/10560241/how-to-use-nodemon-with-env-files
require('dotenv').config();
const Sequelize = require("sequelize")
const sequelize = new Sequelize("flightapp", process.env.POSTGRES_DB_USERNAME, process.env.POSTGRES_DB_PASSWORD, {
    dialect: "postgres",
    host: process.env.POSTGRES_DB_HOST,
    port: process.env.POSTGRES_DB_PORT,
    // Logging settings 
    // https://sequelize.org/docs/v6/getting-started/
    logging: false,
});
// https://sequelize.org/docs/v6/getting-started/
// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
module.exports = sequelize;
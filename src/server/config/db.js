require('dotenv').config({ path: '../../.env' });

const winston = require('../api/lib/utils/winston.js').logger;

// db setup
const dbOptions = require('../knexfile')[process.env.NODE_ENV];

// create connection
const knex = require('knex')(dbOptions);
// console.log(knex);

knex.raw('SELECT VERSION()').then(() => {
  // console.log((version[0][0]));
  winston.info(
    ` connection to ${dbOptions.connection.database} db successful!`,
  );
});

module.exports = knex;

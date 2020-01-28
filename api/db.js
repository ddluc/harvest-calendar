/**
 * Database Connection Setup
 */


let connection = null;

if (process.env.NODE_ENV === 'production') {
  conneciton = process.env.DATABASE_URL
} else {
  connection = {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  }
}

console.log('CONNECTING TO DB ', connection);

const knex = require('knex')({
  client: 'pg',
  connection: connection
});

module.exports = knex;

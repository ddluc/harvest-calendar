/**
 * Database Connection Setup
 */


let connection = null;

if (process.env.NODE_ENV === 'production') {
  connection = process.env.DATABASE_URL
} else {
  connection = {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  }
}


const knex = require('knex')({
  client: 'pg',
  connection: connection
});

module.exports = knex;

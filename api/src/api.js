
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  }
});

class Api {

  static async loadAppConfig (req, res) {
    try {
      const months = await knex('month').select();
      const seasons = await knex('season').select();
      const vegetables = await knex('vegetable').select();
      for (let vegetable of vegetables) {
        const mPos = await knex('market_position')
          .where({vegetable: vegetable.key})
          .select('id', 'month', 'segment', 'value', 'unit', 'status');
        vegetable.mPos = mPos;
      }
      const config = {
        vegetables,
        months,
        seasons
      };
      res.status(200).send(config);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }
  
}

module.exports = Api;

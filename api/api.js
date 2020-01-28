
let db = require('./db');

class Api {

  static async getMarketData (req, res) {
    try {
      const months = await db('month').select();
      const seasons = await db('season').select();
      const vegetables = await db('vegetable').select();
      for (let vegetable of vegetables) {
        const mPos = await db('market_position')
          .where({vegetable: vegetable.key})
          .select('id', 'month', 'segment', 'value', 'unit', 'status');
        vegetable.mPos = mPos;
      }
      const marketData = {
        vegetables,
        months,
        seasons
      };
      res.status(200).send(marketData);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }

}

module.exports = Api;

const path = require("path");
const fs = require('fs');
const csv = require('csvtojson');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  }
});

class DataImporter {

  static async exec () {
    try {
      const files = await DataImporter.readDataDirectory();
      const fileData = await DataImporter.loadData(files);
      await DataImporter.importData(fileData);
    } catch (err) {
      console.error(err);
    } finally {
      return process.exit()
    }
  }

  static readDataDirectory() {
    return new Promise((resolve, reject) => {
      const dataDirPath = path.join(__dirname, 'data');
      fs.readdir(dataDirPath, async (err, files) => {
        if (err) {
          return console.log(`Unable to scan directory ${dataDirPath}: ${err}`);
          reject(err);
        }
        resolve(files);
      });
    });
  };

  static async importData (fileData) {
    let marketPositionData = [];
    fileData.forEach((data) => {
      marketPositionData = marketPositionData.concat(data);
    });
    let result = null;
    result = await knex('market_position').del();
    console.log(`DELETED ${result} rows in TABLE (market_position)`);
    result = await knex('market_position')
        .returning(['id', 'vegetable', 'month', 'segment', 'status', 'value'])
        .insert(marketPositionData);
    console.log(`INSERTED ${result.length} rows in TABLE (market_position)`);
  };

  static async loadData (files) {
    const dataDirPath = path.join(__dirname, 'data');
    const promises = []
    files.forEach((file) => {
      let csvFilePath = path.join(dataDirPath, file)
      let csvPromise = csv({
        colParser: {
          "vegetable": "string",
          "month": "string",
          "segment": "number",
          "value": "number",
          "unit": "string",
          "status": "string"
        }
      }).fromFile(csvFilePath);
      promises.push(csvPromise);
    });
    const fileData = await Promise.all(promises);
    return fileData;
  }


}

DataImporter.exec();

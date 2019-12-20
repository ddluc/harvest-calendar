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



const importData = () => {

  const dataDirPath = path.join(__dirname, 'data');

  // Read Data from disk
  fs.readdir(dataDirPath, (err, files) => {
    if (err) return console.log(`Unable to scan directory ${dataDirPath}: ${err}`);
    const promises = []
    files.forEach((file) => {
      csvFilePath = path.join(dataDirPath, file)
      csvPromise = csv({
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

    // INSERT Data into database
    Promise.all(promises)
      .then((fileData) => {
        let marketPositionData = [];
        fileData.forEach((data) => {
          marketPositionData = marketPositionData.concat(data);
        });
        knex('market_position')
          .del().then((result) => {
            console.log(`DELETED ${result} rows in TABLE (market_position)`);
            knex('market_position')
              .returning(['id', 'vegetable', 'month', 'segment', 'status', 'value'])
              .insert(marketPositionData)
              .then((result) => {
                console.log(`INSERTED ${result.length} rows in TABLE (market_position)`);
              })
              .catch((error) => {
                console.error(error);
              });
          })
          .catch((error) => {
            console.error(error);
          });
    });
  });

};

importData();

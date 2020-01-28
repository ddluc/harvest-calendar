const express = require('express');
const Api = require('./api/api');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}

console.log(`HARVEST APP API: Running in ${process.env.NODE_ENV} mode`);

app.use(express.static('public'));

app.get('/api/market_data', Api.getMarketData);
app.listen(port, () => console.log(`HARVEST APP API: Listening on port ${port}`))

const express = require('express');
const Api = require('./api');
const cors = require('cors');

const app = express();
const port = 3300;

app.use(cors()); 
app.get('/api/market_data', Api.getMarketData);
app.listen(port, () => console.log(`Harvest Calendar listening on port ${port}`))

const express = require('express');
const Api = require('./api');

const app = express();
const port = 3300;

app.get('/app/config', Api.loadAppConfig);

app.listen(port, () => console.log(`Harvest Calendar listening on port ${port}`))

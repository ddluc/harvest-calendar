const express = require('express');

const app = express();
const port = 3300;

app.get('/', (req, res) => res.send('Harvest Calendar?'));

app.listen(port, () => console.log(`Harvest Calendar listening on port ${port}?`))

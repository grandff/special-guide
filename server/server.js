const express = require('express');
const app = express();
const api = require('../src/routes/Game');
const cors = require('cors');
const port = 8080;

app.use(cors());

app.options('/', (reg, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-LENGTH, X-Requested-With');
    res.send();
});

app.listen(port, () => console.log(`Listening on port ${port}`));


const express = require('express');
const path = require('path');

const router = require('./routes/main-router');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('./public'));

app.use(router);

app.listen(3035);


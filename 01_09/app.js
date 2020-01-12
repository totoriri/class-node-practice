const express = require('express');
const parser = require('body-parser');
const router = require('./routes/main-routes');

const app = express();

app.use(parser.urlencoded({ extended: false }))
app.set('view engine','ejs')
app.use(router)


app.use(express.static('./public'))

app.listen(3002);

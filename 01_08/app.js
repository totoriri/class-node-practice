const express = require('express')
const bodyparser = require('body-parser')

const app = express();

app.use(bodyparser.urlencoded({ extend: false }))

app.use('/', (req, res, next) => {
    console.log("welcome to the first middleware")
    next(9)
})
app.use('/', (req, res, next) => {
    console.log("this is the second middleware")
})

app.listen(3000)
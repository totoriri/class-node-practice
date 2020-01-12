const express = require('express')
const router = require('../router/main-router')
const bodyparser = require('body-parser')


const app = express();

app.use(bodyparser.urlencoded({ extend: false }))

app.use(express.static(path.join(__dirname, 'public', 'main.css')))

// // get request
// app.get('/', (req, res, next) => {
//     console.log("welcome to the first middleware")
//     res.setHeader('content-type','text/html')
//     res.write('<form action="/" method="POST"><input type="text" name="message"><button type="submit">send</button></form>')
//     res.end();
// })

// // post request
// app.post('/', (req, res, next) => {
//     console.log("this is the second middleware")
//     fs.writeFile('message.txt', req.body.message, () => {
//         res.status(302)
//         res.redirect('/success')
//         res.end();
//     })
// })


// app.get('/success', (req, res, next) => {
//     res.setHeader('content-type','text/html')
//     res.write(' <h1>success</h1>')
//     res.end();
// })

app.use(router);
app.listen(3002);
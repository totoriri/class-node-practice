// file systemとかなんとか
const fs = require('fs')

const requestHandler = (req, res) => {
    if (req.url === "/") {
        res.setHeader('content-type', 'text/html')
        res.write('<a href="/sendMessage">go to message form</a><a href="/readMessage">go to message page</a>')
        res.end();
    }
    else if (req.url === '/sendMessage') {
        res.setHeader('content-type', 'text/html')
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form>')
        res.end();
    }
    else if(req.url === '/message' && req.method ==="POST"){
        const body = [];

            req.on('data', (package) => {
                console.log(package)
                body.push(package)
            })
        // dateが来るのを止めてる（end）
        // でそのあとparseする
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];

            console.log(message);

            // なぜここでコールバック関数を使うのか、アンシンクロ〜なんとかにするため？
            fs.writeFile('message.txt', message, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/readMessage')
                res.end();
            })
            
        })
        
    }
    else if (req.url === '/readMessage') {
        fs.readFile('./message.txt', 'utf8', (err, data) => {
            console.log(data);
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(`<h1>${data}</h1>`);
            res.end();
        })
    }
}

module.exports = requestHandler;
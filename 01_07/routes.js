// file systemとかなんとか
const fs = require('fs')

const requestHandler = (req, res) => {
    if (req.url === "/") {
        res.setHeader('content-type', 'text/html')
        res.write('<h1>hello node</h1>')
        res.end();
    }
    else if (req.url === '/about') {
        res.setHeader('content-type', 'text/html')
        res.write('<h1>we are awsome</h1>')
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
                res.setHeader('Location', '/')
                res.end();
            })
        })
    }
}

module.exports = requestHandler;
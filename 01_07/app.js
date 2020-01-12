const http = require('http');
const router = require('./routes')


// servercreateするよって
// const server = http.createServer((req, res) => {
//     console.log(req);
    
//     console.log(__dirname);
//     console.log(__filename);
//     res.setHeader('Content-type','text/html')
//     res.write('<h1>Hello World</h1>')
//     res.end();
// })
// server.listen(3000);

// ２個目のやつ（routingしてる）
// そのためにroutes.jsっていうファイル作って、このapp.js内には1行目の後にrouter=require(./routes)足してる。
// 最初に動かなかったのは、createserverを無駄に2行書いてたから。
    const server = http.createServer(router)

server.listen(3000);
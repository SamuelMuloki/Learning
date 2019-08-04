var http = require('http')
// var connect = require('connect')

http.createServer(function(req, res) {
    res.writeHead(200 , {
        'content-type': 'text/plain'
    });
    res.end('Hello world');
}).listen(3000)

console.log('Server running at http://localhost:3000')

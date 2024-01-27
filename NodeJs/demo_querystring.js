const http = require('http');
const url = require('url')
http.createServer(function(reg, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(reg.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080)
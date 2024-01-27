const http = require("node:http");
//const fs = require('node:fs');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
    } else if (req.url == '/abut') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Abut Page');
    } else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({
            firstName: 'soad',
            lastName: "Hamdan"
        }))

    } else {
        res.writeHead(404)
        res.end("Page Not Fund")
    }
})
server.listen(6060, () => {
    console.log(' Recast Work in Port :6060')
})
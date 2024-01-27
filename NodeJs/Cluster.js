const cluster = require("node:cluster");
const os = require('node:os');
console.log(os.cpus.length());
if (cluster.isMaster) {
    console.log(`Master Process ${process.pid} is Running `);
    cluster.fork();
    cluster.fork();
} else {
    console.log(`Worker ${process.pid} started`)
    const http = require("node:http");
    //const fs = require('node:fs');
    const server = http.createServer((req, res) => {
        if (req.url == '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Home Page');
        } else if (req.url == '/slow-page') {
            for (i = 0; i <= 600000000; i++) {}
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('slow page');
        } else {
            res.writeHead(404)
            res.end("Page Not Fund")
        }
    })
    server.listen(6060, () => {
        console.log(' Recast Work in Port :6060')
    })

}
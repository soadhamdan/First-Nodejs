const http = require("node:http");
const fs = require('node:fs');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('./homwork/home.html').pipe(res);
    } else if (req.url == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('./homwork/about.html').pipe(res);
    } else if (req.url === '/video') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream('./homwork/video.html').pipe(res);


    } else if (req.url === "/login") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream('./homwork/login.html').pipe(res);

    } else if (req.url === "/image") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream('./homwork/image1.html').pipe(res);

    } else {
        res.writeHead(404)
        res.end("Page Not Fund")
    }
})
server.listen(8080, () => {
    console.log(' Recast Work in Port :8080')
})
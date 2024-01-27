const http = require("node:http");
const { Worker } = require('node:worker_threads')
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
    } else if (req.url == '/slow-page') {
        const worker = new Worker('./worker-threads.js');
        worker.on('message', (j) => {

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`slow page ${j}`);
        })
    } else {
        res.writeHead(404)
        res.end("Page Not Fund")
    }
})
server.listen(6060, () => {
    console.log(' Recast Work in Port :6060')
})
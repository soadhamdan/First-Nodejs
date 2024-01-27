const http = require('node:http');
const server = http.createServer((reg, res) => {
    res.writeHead(200, { "content-Type": "text/plain" });
    console.log(reg)

    res.end("Hello Soad In Node.js Word")
})
server.listen(1000, () => {
    console.log("the page Work in Port:1000")
})
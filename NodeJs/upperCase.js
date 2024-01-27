var { createServer } = require('http');
import { upperCase } from "./node_modules/upper-case";
createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(upperCase("Hello World!"));
    res.end();
}).listen(8080);
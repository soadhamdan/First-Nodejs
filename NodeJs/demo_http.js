const http = require('http');
http.createServer(function(req, res) {
        res.write('Hello World! Soad'); //write a response to the client
        res.end(); //end the response
    }).listen(8080) //the server object listens on port 8080
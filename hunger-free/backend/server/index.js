// http is an inbuilt module in Node.js
const http = require('http');

// createServer method takes a callback function as argument
// the callback function takes two arguments req and re
const server = http.createServer(function (req, res) {
    res.statusCode = 200; // 200 = OK
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Welcome to The Healthy, Hunger-Free kids.</h1>");
    res.end();
});

// server is listening to incoming requests on port 4000 on localhost
server.listen(4000, function () {
    console.log("Listening on port http://localhost:4000");
});

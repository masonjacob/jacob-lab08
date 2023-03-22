var http = require('http');
var fs = require('fs');
const PORT = 1337;

let serveStaticFile = function(filePath, responseCode) {
    if (!responseCode) {
        responseCode =200;
    }
    fs. readFile(_dirname + path, function(err,data) {
        if (err) {
            res. writeHead(500, {'Content—Type': 'text/plain'});
            res.end( '500 — Internal Error');
        } else {
            res.writeHead(responseCode,
                { 'Content—Type': contentType });
            res.end(data);
        }
    });
}

http.createServer((request, response) => {

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write("Hello World!\n");
    response.end();
}).listen(PORT);
var http = require ('http');
var htmlHandler = require('./htmlResponses.js');
var jsonHandler = require('./jsonResponses.js');
var imageHandler = require('./imageResponses.js');

var port = process.env.PORT || 3000;

var onRequest = function (req, res) {
    switch(req.url) {
        case '/':
            htmlHandler.getIndex(req, res);
            break;
        case '/page2':
            htmlHandler.getPage2(req, res);
            break;
        case '/helloJSON':
            jsonHandler.getHelloJSON(req, res);
            break;
        case '/timeJSON':
            jsonHandler.getTimeJSON(req, res);
            break;
        case '/dankmemes':
            imageHandler.getSpongegar(req, res);
            break;
        default:
            htmlHandler.getIndex(req, res);
            break;
    }
};

http.createServer(onRequest).listen(port);
console.log("Listening on locahost:" + port);

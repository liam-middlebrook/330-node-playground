var fs = require('fs');

var index = fs.readFileSync(__dirname + "/../client/client.html");
var page2 = fs.readFileSync(__dirname + "/../client/client2.html");

var getIndex = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(index);
    res.end();
};

var getPage2 = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(page2);
    res.end();
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;

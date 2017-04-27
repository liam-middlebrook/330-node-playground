var fs = require('fs');

var sponge = fs.readFileSync(__dirname + "/../client/spongegar.png");

var getSpongegar = function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.write(sponge);
    res.end();
};

module.exports.getSpongegar = getSpongegar;

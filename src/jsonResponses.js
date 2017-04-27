var getTimeString = function () {
    var d = new Date();
    var dateString = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    return dateString;
};

var getHelloJSON = function (req, res) {
    var helloJSON = {
        message: "Hello World!",
    };

    var stringMessage = JSON.stringify(helloJSON);

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(stringMessage);
    res.end();
};

var getTimeJSON = function (req, res) {
    var timeJSON = {
        time: getTimeString()
    };

    var stringMessage = JSON.stringify(timeJSON);

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(stringMessage);
    res.end();
};

module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;

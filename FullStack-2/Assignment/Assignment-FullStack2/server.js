var static = require('node-static');
var http = require('http');

var PORT = process.env.PORT || 8080;

var file = new static.Server('./public');

http.createServer(function (req, res) {
    file.serve(req, res);
}).listen(PORT);
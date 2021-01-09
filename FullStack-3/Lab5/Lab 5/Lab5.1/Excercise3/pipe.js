var request = require("request");

var fs = require("fs");
const { clear } = require("console");

request ("http://www.google.com", function(error, res, body){

    console.log("body: ", body);
})
.pipe(fs.createWriteStream('output.html'));


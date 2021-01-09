var events = require("events");
var eventEmitter = new events.EventEmitter();

var call = function () {
    console.log("Alarm has been triggered!! ");
}

var events = require("events");
var eventEmitter = new events.EventEmitter(2);

var call2 = function () {
    console.log("Call 911 ");
}

eventEmitter.on("alarm", call)
eventEmitter.on("alarm", call2);
eventEmitter.emit("alarm")


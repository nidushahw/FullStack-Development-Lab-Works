const mongoose = require("mongoose");
const SocketEventSchema = new mongoose.Schema({
    socket: String,
    type: String,
    eventTime: {type: Date, default: Date.now}

});
const socketEvent = mongoose.model("SocketEvent", SocketEventSchema, "SocketEvent");
module.exports = socketEvent;
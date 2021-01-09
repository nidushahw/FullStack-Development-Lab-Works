const mongoose = require("mongoose");
const DownloadEventSchema = new mongoose.Schema({
    socket: String,
    songId: String,
   downloadTime:{ type: Date, default: Date.now }

});
const downloadEvent = mongoose.model("DownloadEvent", DownloadEventSchema, "DownloadEvent");
module.exports = downloadEvent;
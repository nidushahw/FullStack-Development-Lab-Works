const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const router = require('./routes/musicRoutes');
const socketEvent = require("./models/soketEvent");
const downloadEvent = require("./models/downloadEvent");


const connectionString = "mongodb://localhost:27017/music-search-gbc?readPreference=primary&appname=Mongodb%20Compass&ssl=false";

mongoose.connect(connectionString, {userNewURLParser: true})
    .then(() => {
            console.log("mongoose connected successfully ");
        },
        error => {
            console.log("Mongose could not connected to database: " + error)
        });

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/search', router);

io.on("connection", function (socket) {
    console.log("SOCKET - Connection accepted.");
    socketEvent.create({socket: socket.id, type: "connection"}, (error, sEvent) => {
        if (error) console.log(`Error occurred on socketEvent.create(): ${error}`);
        else {
            console.log(`socketEvent.create() ${sEvent}`);
        }
    });

    socket.on("download", function (id) {
        console.log(`SOCKET - Received client message to download music id: ${id} `);
        socket.emit("download-received", id);
        downloadEvent.create({socket: socket.id, songId: id}, (error, dEvent) => {
            if (error) console.log(`Error occurred on downloadEvent.create() : ${error}`);
            else {
                console.log(`downloadEvent.create() ${dEvent}`);
            }
        });
    });

    socket.on("disconnect", function () {
        console.log("SOCKET - Disconnected...");
        socketEvent.create({socket: socket.id, type: "disconnect"}, (error, sEvent) => {
            if (error) console.log(`Error occurred on socketEvent.create(): ${error}`);
            else {
                console.log(`socketEvent.create() ${sEvent}`);
            }
        });
    });
});

http.listen(port, () => {
    console.log(`listening on *:${port}`);
});

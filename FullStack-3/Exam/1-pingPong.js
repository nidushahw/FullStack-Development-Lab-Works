let events = require("events");
let eventEmitter = new events.EventEmitter();

let playGame = (num) => {
    let noOfEvents = 0;
    eventEmitter.on("ping", () => {
        noOfEvents++;
        if (noOfEvents <= num) {
            console.log("ping..");
            eventEmitter.emit("pong");
        }
    });

    eventEmitter.on("pong", () => {
        console.log("pong..");
        eventEmitter.emit("ping");
    });

    eventEmitter.emit("ping");
}

playGame(3);

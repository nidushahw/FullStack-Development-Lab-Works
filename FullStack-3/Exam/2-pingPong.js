let events = require("events");
let eventEmitter = new events.EventEmitter();

let playGame = (num) => {
    let noOfRounds = 0;
    eventEmitter.on("ping", () => {
        noOfRounds++;
        if (noOfRounds <= num) {
            console.log(`Round ${noOfRounds}`);
            console.log("ping..");
            setTimeout(() => {
                eventEmitter.emit("pong");
            }, 1000);
        } else {
            console.log("Game is over");
            process.exit(0);
        }
    });

    eventEmitter.on("pong", () => {
        console.log("pong..");
        setTimeout(() => {
            eventEmitter.emit("ping");
        }, 1000);
    });

    eventEmitter.emit("ping");
}

playGame(10);

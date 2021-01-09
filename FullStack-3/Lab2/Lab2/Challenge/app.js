const http = require('http');
const url = require("url");
const events = require("events");

let eventEmitter = new events.EventEmitter();
let jackpot = function () {
    console.log("Jackpot!!");
}
eventEmitter.on("hitmax", jackpot);

const hostname = '127.0.0.1';
const port = 3000;
let amount = 0;

const server = http.createServer((req, res) => {
    let parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;
    if (pathname === "/play") {
        let queryData = parsedUrl.query;
        console.log("Playing..amount :" + queryData.amount);
        amount = queryData.amount;

    } else if (pathname === "/spin") {
        console.log("Spinning..");

        if (amount === "max") {
            eventEmitter.emit("hitmax");
        } else {
            console.log("Amount lost :" + amount);
        }

    } else {
        console.log("Please Play or Spin");
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Slot Machine');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});





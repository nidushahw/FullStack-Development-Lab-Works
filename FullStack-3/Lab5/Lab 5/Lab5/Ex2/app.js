const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const buff = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

myEmitter.on('convert', function () {
    for (let i = 0; i < buff.length; i++) {
        console.log(buff[i]);
    }
});

myEmitter.emit("convert");
console.log("buffer converted");
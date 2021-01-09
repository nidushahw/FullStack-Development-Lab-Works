const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
   
    if (req.url === "/play") {
        console.log("Playing..");

    } else if (req.url === "/spin") {
        console.log("Spinning..");

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
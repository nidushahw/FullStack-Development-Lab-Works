const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/restaurant-app?readPreference=primary&appname=Mongodb%20Compass&ssl=false";

mongoose.connect(connectionString, { userNewURLParser: true })
  .then(() => { console.log("mongoose connected successfully "); },
    error => { console.log("Mongose could not connected to database: " + error) })


const http = require("http"),
  url = require("url"),
  fs = require("fs"),
  io = require("socket.io");

const Restaurant = require("./model/Restaurant");
const Order = require("./model/order");

const server = http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;
  switch (path) {
    case "/":
      fs.readFile(__dirname + "/index.html", function (err, data) {
        if (err) return send404(res);
        res.writeHead(200, {
          "Content-Type": path == "json.js" ? "text/javascript" : "text/html"
        });
        res.write(data, "utf8");
        res.end();
      });
      break;

    default:
      send404(res);
  }
});
const send404 = function (res) {
  res.writeHead(404);
  res.write("404");
  res.end();
};

const PORT = 8080;
server.listen(PORT, () => console.log(`server started on localhost:${PORT}`));

// socket.io, I choose you
const ioServer = io.listen(server);

// socket.io setup and manager
ioServer.on("connection", function (socket) {
  // now we have a client object!
  console.log("Connection accepted.");

  // event listeners
  socket.on("message", function (message) {
    console.log(`Recieved message: ${message} - from client`);
    socket.emit("msgreceived");
  });

  socket.on("disconnect", function () {
    console.log("Disconnected...");
  });

  socket.on("get-restaurants", () => {
    console.log("server - get-restaurants called");

    Restaurant.find((error, documents) => {
      if (error) console.log(`Error occurred on Restaurant.find(): ${error}`);
      else {
        console.log(`Restaurant.find() returned documents: ${documents}`);
        const data = documents.map(x => x.name);
        socket.emit("restaurants-data", data);
      }
    })
  });

  socket.on("queens-delicatessen", () => {
    console.log("server qeens-delicatessen called");
    Restaurant.find((error, restaurants) => {
      if (error) console.log(`Error occurred on Restaurant.find(): ${error}`);
      else {
        const data = restaurants.filter((r) => {
          if (r.city === "Queens" && r.cuisine === "Delicatessen") {
            return true;
          } else {
            return false;
          }
        }).map(x => x.name);
        console.log(`Restaurant.find() filtered documents: ${data}`);
        socket.emit("queens-delicatessen", data);
      }
    });
  });

  socket.on("get-orders", () => {
    console.log("server - get-orders called");

    Order.find((error, orderdata) => {
      if (error) console.log(`Error occurred on Order.find(): ${error}`);
      else {
        console.log(`Order.find() returned documents: ${orderdata}`);
        socket.emit("orders-data", orderdata);
      }
    });
  });

  socket.on("add-order", (itemName) => {
    console.log("server - add-order called", itemName);
    Order.create({ item: itemName, customer_name: "Alice" }, (error, order) => {
      if (error) console.log(`Error occurred on Order.create(): ${error}`);
      else {
        console.log(`Order.create() ${order}`);
        socket.emit("order-data-added", order);
      }
    })
  });

});



var express = require("express");
var app = express();

app.listen(8083);

app.get("/greet", function(req, res){
    res.send("hello world!");
})
var requestTime = function(req, res, next){
    req.requestTime =Date.now()
    next()
}
app.use(requestTime)

app.get("/greet", function(req, res){
    console.log("GET received: " + req.requestTime);
    res.send("hello world!");
})

app.post("/greet", function(req, res){
    console.log("POST received: " + req.requestTime);
    res.send("hello world POST!");
})
app.put("/greet", function(req, res){
    console.log("POST received: " + req.requestTime);
    res.send("hello world PUT!");
})

app.delete("/greet", function(req, res){
    console.log("POST received: " + req.requestTime);
    res.send("hello world Delete!");
})
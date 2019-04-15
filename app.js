
var express = require("express");
var app =  express();

app.get("/", function(req, res){
    res.send("Hi Sanju");
});

app.get("/bye", function(req, res){
    res.send("Bye Sanju");
});

app.get("/dog", function(req, res){
    console.log("Someone made a request to /dog");
    res.send("Meow!!!");
});

app.get("/:dog/comments/:ihatethem", function(req, res){
    console.log(req.params);
    res.send("Welcome to the dogs page!!!");
});

app.get("/dog/:dogcomments", function(req, res){
    var subreddit = req.params.dogcomments;
    res.send("These are your dog comments!!! " + subreddit.toUpperCase() + " eeeeeyayayayyyyyy");
});

app.get("*", function(req, res){
    console.log("Someone made a request to /dog");
    res.send("404 page not found!!");
});

app.listen(9000, function(){
    console.log("Serving this port on 9000");
});
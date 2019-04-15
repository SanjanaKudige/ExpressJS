var express = require("express");
var app =  express();

app.get("/", function(req, res){
    res.send("Hi there, Welcome to my first express app!!");
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        dog: "bow bow",
        cat: "meow",
        goldfish: "..."
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    
    res.send("The " + animal + " says " + sound + "!!!");
});

app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";

    for(var i=0; i< times; i++){
        result += message + " ";
    }
    res.send(result);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found. What are you doing with your life!?");
});

// serves on localhost port 3000 on the browser
app.listen(3000, function(){
    console.log("Serving this port on 3000");
});
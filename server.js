// server.js

// init project
var express = require('express');
var app = express();
// var history = require('connect-history-api-fallback');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
// app.use(history());

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/about", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/contribute", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/vote", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

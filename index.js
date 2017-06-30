const express = require('express');
const app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 8080;
var io = require('socket.io')(http);
var currentColor = "blue";

app.use(express.static('res'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  socket.on('changeColor', function() {
    currentColor = getRandomColor();
    io.emit('changeColorTo', currentColor);
  });

  socket.on('getCurrentColor', function() {
    io.emit('currentColor', currentColor);
  });
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

http.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});

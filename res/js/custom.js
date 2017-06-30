$(function() {

  var socket = io();

  $(document).ready(function() {
    socket.emit('getCurrentColor');
  });

  $('#colored').click(function() {
    socket.emit('changeColor');
  });

  socket.on('currentColor', function(color) {
    $('#colored').css("background-color", color);
    $('.filled').css("background-image", 'none');

  });

  socket.on('changeColorTo', function(color) {
    $('#colored').css("background-color", color);
  });
});

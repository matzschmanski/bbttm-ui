  $(function() {
    $( document ).ready(function() {
      socket.emit('getCurrentColor');
    // $('#colored').css("background-color", color);
    });
    var socket = io();
    $('#colored').click(function() {
      console.log("Handler for $('#clicker').click() called.",$('#clicker'));
      socket.emit('changeColor');
    });

    socket.on('currentColor', function(color){
      console.log('current color: ',color);
      $('#colored').css("background-color", color);
      $('.filled').css("background-image", 'none');

    });

    socket.on('changeColorTo', function(color){
      console.log('color: ',color);
      $('#colored').css("background-color", color);

        });
  });

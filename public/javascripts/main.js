$.get('/messages', function (data) {
      data.forEach(addMessages);
  });

$("#send").click(function () {
  sendMessage({name: $("#name").val(), message: $("#message").val()});
  $("#name").attr('value', '');
  $("#message").attr('value', '');
});

const socket = io();
socket.on('message', addMessages);

function addMessages(message) {
    $("#messages").append(`<h4>${message.name}</h4> <p>${message.message}</p>`);
}

function sendMessage(message) {
    socket.emit('message', message);
    $.post('/messages', message)
}

$(function () {
  //*** make socket io connection
  var socket = io.connect("http://localhost:3001");
  //buttons and inputs
  var message = $("#message");
  var username = $("#username");
  var send_message = $("#send_message");
  var send_username = $("#send_username");
  var chatroom = $("#chatroom");
  var feedback = $("#feedback");

  //Emit message
  send_message.click(function () {
    // emit socket message that user has send chat message
    socket.emit("new_message", { message: message.val() });
    console.log("send message")
  });

  //Emit a username
  send_username.click(function () {
    // emit socket message user has changed name
    console.log(username.val())
    socket.emit("change_username", { username: username.val() })
  });

  socket.on("new_message" ,(data) => {
    console.log(data);
    chatroom.append ("<p class= 'message'>" + data.username + " :" + data.message + "</p>")
  });

  //set up socket.io event listeners
message.bind("keypress", () =>{
  socket.emit("typing");
})

socket.on("typing", (data) => {
  feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>");
})

});

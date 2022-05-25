socket = io.connect('http://' + document.domain + ':' + location.port);
socket.on('connect', function(){
  socket.send('user connected')
});
socket.on('message', function(msg){
  document.getElementById('messages').innerHTML += '<li>'+msg+'</li>'
});

function send() {
  socket.send(document.getElementById('mymessage').value);
  document.getElementById('mymessage').value = '';
};


window.onbeforeunload = function () {
socket.send('user disconnected')
}

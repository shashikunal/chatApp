var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection' , function(){
	console.log('User Connected via Socket io!');
});

http.listen(PORT , function (err) {
  if(err){
  	console.log(err);
  }else {
  	console.log('Chat Application is Running on Port Number' + " " + PORT);
  }
});
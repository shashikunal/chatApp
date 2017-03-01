var PORT = process.env.PORT || 3000;
var moment = require('moment');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection' , function(socket){
	console.log('User Connected via Socket io!');
    socket.on('message' , function(message){
    	console.log('message Received' + " " + message.text);
        message.timestamp = moment().valueOf();  
    	io.emit('message' , message);
    });

    socket.emit('message' , {
    	name:'System',
    	text:'Welcome to Chat Application',
    	timestamp : moment().valueOf()
    });
});

http.listen(PORT , function (err) {
  if(err){
  	console.log(err);
  }else {
  	console.log('Chat Application is Running on Port Number' + " " + PORT);
  }
});
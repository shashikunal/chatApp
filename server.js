var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

http.listen(PORT , function (err) {
  if(err){
  	console.log(err);
  }else {
  	console.log('Chat Application is Running on Port Number' + " " + PORT);
  }
});
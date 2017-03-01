var socket = io();
socket.on('connect' , function(){
	console.log('Connected to socket io Server');
});

socket.on('message' , function(message){
	var momentTimestamp = moment.utc(message.timestamp);
	console.log('New Message');
	console.log(message.text);
	jQuery('.message-add').append('<p>' + '<strong>' + momentTimestamp.local().format('h:mm a') + " "  + '</strong>'  + message.text + '</p>');
});

var $form = jQuery('#message-form');
$form.on('submit' , function(e){
	e.preventDefault();
	var $message = $form.find('input[name=message]');
	socket.emit('message' , {
		text:$message.val()
   });
	$message.val('');
});
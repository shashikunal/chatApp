var socket = io();
var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');

socket.on('connect' , function(){
	console.log('Connected to socket io Server');
    socket.emit('joinRoom' , {
    	name:name,
    	room : room
    });
});


//room title
jQuery('.message-title').text(room);

socket.on('message' , function(message){
	var momentTimestamp = moment.utc(message.timestamp);
	var $messageVar = jQuery('.message-add');
	console.log('New Message');
    console.log(message.text);
   
    $messageVar.append('<p>' + '<strong>' + message.name + " "  + '</strong>'  + momentTimestamp.local().format('h:mm a') + '</p>');
    $messageVar.append('<p>' + message.text + '</p>');

	
});

var $form = jQuery('#message-form');
$form.on('submit' , function(e){
	e.preventDefault();
	var $message = $form.find('input[name=message]');
	socket.emit('message' , {
		name:name,
		text:$message.val()
   });
	$message.val('');
});
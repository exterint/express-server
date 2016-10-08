var express = require('express');
var app = express();
var server_port = 3000;

app.get('/', function(req, res) {
	res.send('Hello World!');
})

app.listen(server_port, function() {
	console.log('Listening on port : ' + server_port);
})
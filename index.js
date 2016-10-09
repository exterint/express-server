var express = require('express');
var app = express();
var server_port = 3000;

app.get('/', function(req, res) {
	res.send('Hello World!');
})

app.get('/:name', function(req,res) {
	res.send('Hello ' + req.params.name + '!');
})

app.get('/about', function(req,res) {
	res.send('About Me!');
})

app.listen(server_port, function() {
	console.log('Listening on port : ' + server_port);
})
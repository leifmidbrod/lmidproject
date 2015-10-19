var port = (process.env.port || '3500');
var express = require('express')
var app = express()


app.get('/', function(req, res){
	console.log('Started');
	res.send('Hello World!')
});

app.listen(port);
console.log('Listening on ' + port);
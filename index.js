var express = require('express')
var app = express()


app.get('/', function(req, res){
	console.log('Started');
	res.send('Hello World!')
});

app.listen(3000);
console.log('Listening on 3000');
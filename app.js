var express = require('express');

var path = require('path');
var http = require('http');

var app = express();

app.set('port', process.env.PORT);
app.use(express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(app.get('port'), function() {
	console.log("Created application at port: " + app.get('port'));
});
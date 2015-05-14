var express = require('express');

var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('port', process.env.PORT);
app.use(express.static(path.join(__dirname, 'public')));

app.post('/services/login', function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	console.log("logging in, username : " + username);
	// fail
	if (username === "fail") {
		res.status(404).send("invalid user");
	} else {
		//mock success
		if (username === "viewer1") {
			res.send(JSON.stringify({roles: ["Viewer"]}));			
		} else if (username === "viewer2") {
			res.send(JSON.stringify({roles: ["Viewer", "AdminViewer"]}));
		} else if (username === "creator") {
			res.send(JSON.stringify({roles: ["Creator", "AdminViewer"]}));
		} else {
			res.send(JSON.stringify({roles: ["Authoriser", "Admin"]}));			
		}
	}
});

http.createServer(app).listen(app.get('port'), function() {
	console.log("Created application at port: " + app.get('port'));
});
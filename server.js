var express = require('express');
var app = express();

var visitor = 0;
var loggedIn = false;
var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', function (req, res, next) {
	res.sendFile(__dirname + "/webpages/index.html");
	console.log("Visitor: " + ++visitor, req.connection.remoteAddress);

});

app.get('/code', function (req, res, next) {
	res.sendFile(__dirname + "/webpages/code.html");
});

app.get('/about', function (req, res, next) {
	res.sendFile(__dirname + "/webpages/about.html");
});

app.get('/contact', function (req, res, next) {
	res.sendFile(__dirname + "/webpages/contact.html");
});

app.get('/login', function (req, res, next) {
	response = {
		username: req.query.username,
		password: req.query.password
	};

	if (response.username == 'kyle' && response.password == 'hello') {
		loggedIn = true;
		res.redirect('/admin-page');
	}
});

app.get('/admin-page', function (req, res, next) {
	if (loggedIn) {
		res.sendFile(__dirname + "/webpages/admin-page");
	} else {
		res.sendFile(__dirname + "/webpages/login-page");
	}
});

app.listen(port, function (){
	console.log("Listening on localhost:80");
});
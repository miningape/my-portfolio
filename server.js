var express = require('express');
var app = express();

var visitor = 0;
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

app.listen(port, function (){
	console.log("Listening on localhost:80");
});
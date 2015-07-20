var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use("/public", express.static(__dirname + '/public'));
app.use("/src", express.static(__dirname + '/src'));
app.use("/lib", express.static(__dirname + '/lib'));

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(port, function() {
	console.log('Guillaume Bowling is running on http://localhost:' + port);
});
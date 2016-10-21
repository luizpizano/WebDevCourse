var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {

	// GET EVENTS FROM DB

    res.render('pages/index', {"title": "my new page", "lista": ["a","b",3] });
});

app.locals.beauty = function(a) {
	return "*" + a + "*";
}

app.listen(8080);

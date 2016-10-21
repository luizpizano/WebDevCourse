var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/cookie', function(req,res){
	res.cookie("a_cookie", 55).send('Cookie is set');
})

app.get('/', function (req,res){
	res.send('The cookies set was print in the console')
	console.log("Cookies: ", req.cookies)
})

var server = app.listen(8081, "127.0.0.1", function(){
	var address = server.address().address
	var port = server.address().port
	console.log("Server to test cookies working at http://%s:%s", address, port)
})
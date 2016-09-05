var http = require("http"); // carregar módulo http
http.createServer(
function(request, response) { // funcao anonima
	console.log("request received");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8888);
console.log("Server has started");
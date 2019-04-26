
// Modules
var http = require('http');
var fs = require('fs');
var url = require('url');


// Server
http.createServer(function(req, res){

	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;

	// sets default page route to index.html
	if(filename == './'){filenmae = './index';}

	filename = filename + ".html";
	
	fs.readFile(filename, function(err, data){

		if(err){
			res.writeHead(404, {'Content-Type' : 'text/html'});
			return res.end("404 Not Found");
		}
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write(data);
		res.end();
	})

}).listen(8080);

console.log("Server listening on port 8080...");
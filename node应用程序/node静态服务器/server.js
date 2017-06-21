var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

function start(){
	function onRequest(req,res){
		var pathname = url.parse(req.url).pathname;
		var ROOT = path.resolve('.');
		fs.readFile(path.join(ROOT,pathname),function(err,file){
			if(err){
				res.writeHead(404);
				res.write('404 Not Found');
				res.end();
			}
			res.writeHead(200);
			res.end(file);
		})
		/*res.writeHead(200,{'Content-Type':'text/plain'});
		res.write('Hellow world');
		res.end();*/
	}
	http.createServer(onRequest).listen(3000);
	console.log('server is running at http://localhost:3000')
}

exports.start = start;
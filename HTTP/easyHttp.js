var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hellow World \n');
}).listen(1338,'127.0.0.2');

console.log('Server running at http://127.0.0.2:1338/');

console.log('什么都可以打印');
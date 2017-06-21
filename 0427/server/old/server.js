var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'content-type': 'textplain'})
	res.end('Hello word')
}).listen(1337)
console.log('Server running at localhost:1337')
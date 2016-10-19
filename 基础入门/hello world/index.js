var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'textplain'});
	res.end('hellow world');
}).listen(1337,'192.168.1.101');
console.log('Server running at http://192.168.1.101:1337/');
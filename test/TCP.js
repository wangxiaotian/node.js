var net = require('net');

var server = net.createServer(function(socket){
	//	新的连接
	socket.on('data',function(data){
		socket.write('你好');
	})

	socket.on('end',function(){
		console.log('连接断开');
	})

	socket.write('欢迎光临《深入浅出Node.js》示例：\n')
});

server.listen(8124,function(){
	console.log('server bound');
})

var net = require('net');

var client = net.connect({port:8124},function(){
	console.log('client connect');
	client.write('world!\r\n');
})

client.on('data',function(data){
	console.log(data.toString());
	client.end();
})

client.on('end',function(){
	console.log('client disconnected');
})


var http = require('http');
var url = require('url');

function start(route,handle){
	function onRequest(req,res){
		//	解析路径
		var pathname = url.parse(req.url).pathname;
		console.log('pathname:' + pathname);

		//	获取请求数据
		var postData = '';
		req.setEncoding('utf8');

		req.addListener('data',function(postDataChunk){
			postData += postDataChunk;
			console.log('received res:' + postDataChunk);
		})

		req.addListener('end',function(){
			route(pathname,res,handle,postData);
		})
	}
	http.createServer(onRequest).listen(3000);
	console.log('Server is running at http://localhost:3000');
}
/*http.get('/index.html',function(res){
	console.log('相应');
}).on('error',function(e){
	console.log('错误');
})*/
exports.start = start;
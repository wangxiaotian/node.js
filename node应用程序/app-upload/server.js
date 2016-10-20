var http = require('http');
var url = require('url');
 
function start(route,handle) {
    http.createServer(function(req, res) {
        var postData = '';
    	var pathname = url.parse(req.url).pathname;
    	console.log('Requset for ' + pathname + ' received.');
        route(handle,pathname,res,req);

    }).listen(8888);
    console.log('Server has started')
}

//	如何导出行为呢？在外层封装一个函数即可

exports.start = start;
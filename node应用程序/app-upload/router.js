function route(handle,pathname,res,req){
	console.log('About to route a request for ' + pathname);
	if (typeof handle[pathname] === 'function'){
		//	如果路径是一个函数，则立即执行。这是什么意思？哦，对的之前做的相应路径映射到不同的处理程序上
		handle[pathname](res,req);
	} else {
		console.log('No request handle found for ' + pathname);
		res.writeHead(404,{'Content-Type':'text/plain'});
		res.write('404 Not found');
		res.end();
	}
}

exports.route = route;
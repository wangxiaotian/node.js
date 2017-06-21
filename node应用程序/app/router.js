function route(pathname, res, handle,postData) {
    
    if (typeof handle[pathname] == 'function') {
    	console.log(1);
        handle[pathname](res,postData,pathname);
    } else {
    	console.log(0);
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not found');
        res.end();
    }

}

exports.route = route;

var server = require('./server.js');
var route = require('./router.js');
var requestHandlers = require('./requestHandlers.js');
var handle = {};

handle['/index.html'] = requestHandlers.func1;
handle['/'] = requestHandlers.func1;
handle['/formdeal'] = requestHandlers.formdeal;
handle['/views/index.html'] = requestHandlers.pageIndex;
handle['/views/scripts/jquery.min.js'] = requestHandlers.pageHandleJs;
server.start(route.route,handle);
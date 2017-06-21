var express = require('express');
var app = express();
var path = require('path');
var users = require('./test.js');
var ab = path.resolve('index.html');
var ac = path.resolve('js/vue.js');
app.use('/js',express.static(__dirname + '/js'));
app.get('/', function(req, res) {
    /*res.sendFile('/index.html');*/
    /*res.json('{"name":"小明"}')*/
    res.sendFile(ab);
    
})
var a = {
	data: []
};
for (var i = 0; i < 10; i++) {
    a.data.push(i + '序列号');
}
/*a = JSON.stringify(a);*/
//	user接口
app.get('/user', function(req, res) {
    res.json(a);
})
//	query接口
app.get('/query', function(req, res) {
	users.queryAll(function(data){
		res.json(data);
	})
    
})

app.listen(3000, function() {
    console.log('server is running at port 3000')
})

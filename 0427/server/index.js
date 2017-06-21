var express = require('express');
var db = require('./db');
var bodyParser = require('body-parser');
var multer = require('multer');
var router = require('./router');
var path = require('path');
var pages = path.resolve('src/pages')
var app = express();

app.set('port',(process.env.PORT || 3001));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
/*app.use(multer());*/
app.use('/js',express.static(path.resolve('src/js/')));
app.use(router);

app.get('/',function(req,res){
	res.sendFile(path.resolve(pages + '/login/login.html'));
})

app.listen(app.get('port'),function(){
	console.log('server is running at ' + app.get('port'))
})
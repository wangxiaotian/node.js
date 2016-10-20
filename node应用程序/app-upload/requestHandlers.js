var querystring = require('querystring');
var fs = require('fs');
var formidable = require('formidable');

/*function start(res,postData){
	console.log('Request handler "start" was called.');
	var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60" placeholder = "在此输入"></textarea>' +
        '<input type="submit" value="提交" />' +
        '</form>' +
        '</body>' +
        '</html>';
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(body);
    res.end();
}*/

function start(res){
	console.log('Request handler "start" was called.');
	var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<input type = "file" name = "upload">' + 
        '<input type="submit" value="上传" />' +
        '</form>' +
        '</body>' +
        '</html>';
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(body);
    res.end();
}

function upload(res,req){
	console.log('Request handler "upload" was called.');

	var form = new formidable.IncomingForm();
	console.log('parsing done');
	form.parse(request,function(error,fields,files){
		console.log('parsing done');
		fs.renameSync(files.upload.path,"./bac.png");
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write('received image:<br/>');
		res.write('<img src = "/show" />');
		res.end();
	})
}

function show(res){
	console.log('Request handler "show" was called.');
	fs.readFile('./bac.png','binary',function(error,file){
		if(error){
			res.writeHead(500,{'Content-Type':'text/plain'});
			res.write(error + '\n');
			res.end();
		} else {
			console.log('进来了');
			res.writeHead(200,{'Content-Type':'image/png'});
			res.write(file,'binary');
			res.end();
		}
	})
}
exports.start = start;
exports.upload = upload;
exports.show = show;
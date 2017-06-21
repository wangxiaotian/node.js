var qs = require('querystring');
var fs = require('fs');
/*测试处理*/
function func1(res) {
    console.log('requestHandlers start');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var str = '<a href = "javascript:;">点击这里</a>';
    res.write(str);
    res.end();
    console.log('requestHandlers end');
}
/*表单提交处理*/
function formdeal(res, postData) {
    console.log('表单提交');
    console.log('postData:' + postData);
    var data1 = qs.parse(postData).text;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(postData);
    res.end();
}
/*首页*/
function pageIndex(res) {
    var str = '<!DOCTYPE html> <html lang = "en">' + 
        '<head>' + 
        '<meta charset = "UTF-8">' + 
        '<title> post请求 </title> <script src = "/views/scripts/jquery.min.js"> </script> </head>'+
    	'<body>' + 
        '<header>' + 
        '<center> 处理post请求 </center> </header> <div>'+
        '<div class = "item">'+
        '<label for = ""> 用户名： </label> <input type = "text" name = "user" placeholder = "请输入用户名"></div> <div class = "item">'+
        '<label for = ""> 密码： </label> <input type = "text" name = "pwd" placeholder = "请输入密码" ></div> <button type = "submit" id = "btn"> 登录 </button> </div>'+
    	'</body>' + 
    	'<script>$(function(){' + 
    		'$("#btn").on("click",function(){' + 
    			'$.ajax({' + 
    				'type:"POST",url:"/formdeal",data:{name:"小天"},dataType: "json",contentType: "application/x-www-form-urlencoded; charset=UTF-8",' + 
    				'success:function(res){' + 
    					'alert(res);' + 
    				'},' + 
    				'error:function(res){' + 
    					'alert("提交失败" + res)' + 
    				'}' + 
    			'})' + 
    		'})' + 
    	'})</script>' + 

    	'</html>';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(str);
    res.end();
}

/*js文件处理*/
function pageHandleJs(res,postData,pathname){
	console.log('chuli');
	fs.readFile('F:/office/repositray/wangxiaotian/node.js/node应用程序/app' + pathname,function(err,data){
		if(err) throw err;
		console.log('读取成功');
		res.writeHead(200, { 'Content-Type': 'text/html' });
    	res.write(data);
    	res.end();
	})
}
/*请求处理*/
exports.func1 = func1;
exports.formdeal = formdeal;

/*页面处理*/
exports.pageIndex = pageIndex;
exports.pageHandleJs = pageHandleJs;

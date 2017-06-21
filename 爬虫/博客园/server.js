var http = require('http'),
	url = require('url'),
	superagent = require('superagent'),
	cheerio = require('cheerio'),
	async = require('async'),
	eventproxy = require('eventproxy');
var ep = new eventproxy(),
	urlsArray = [],
	pageUrls = [],
	pageNum = 200;
for(var i = 0; i <= 200; i++){
	pageUrls.push('http://www.cnblogs.com/#p' + i);
}

//	主 start 程序
function start(){
	function onRequest(req,res){
		console.log('start handle');
		pageUrls.forEach(function(pageUrl){
			superagent.get(pageUrl)
						.end(function(err,pres){
							// console.log(pres);
							var $ = cheerio.load(pres.text);
							var currPageUrls = $('.titlelnk');
							for(var i = 0; i < currPageUrls.length; i++){
								var articleUrl = currPageUrls.eq(i).attr('href');
								urlsArray.push(articleUrl);
								ep.emit('BlogArticle',articleUrl);
							}
						})
		});
		ep.after('BlogArticle',pageUrls.length*20,function(articleUrls){
			//	当所有 BlogArticle 事件完成后的回调触发下面事件
			var curCount = 0;
			var reptileMove = function(url,cb){
				//	延迟毫秒数
				var delay = parseInt((Math.random() * 30000000) % 1000,10);
				curCount ++;
				console.log('现在的并发数是', curCount, ',正在抓取的是',url,',耗时' + delay + '毫秒');
				superagent.get(url)
							.end(function(err,sres){
								var $ = cheerio.load(sres.text);
								//	收集数据，拼接URL
								var currentBlogApp = url.split('/p/')[0].split('/')[3],
									appUrl = 'http://www.cnblogs.com/mvc/blog/news.aspx?blogApp='+ currentBlogApp;
								//	具体收集函数
								// personInfo(appUrl);
							});
				setTimeout(function(){
					curCount--;
					cb(null,url + 'call back content');
				},delay);
			}
			//	使用async控制异步抓取
			//	mapLimit(arr,limit,iterator,[cb])
			//	异步回调
			async.mapLimit(articleUrls,1000,function(url,cb){
				reptileMove(url,cb);
			},function(err,result){
				//	4000个url访问完成的回调函数
				console.log('what');
				res.write(result + '<br>')
			})
		})
	}
	http.createServer(onRequest).listen(3000);
	console.log('server is running ...')
}

exports.start = start;
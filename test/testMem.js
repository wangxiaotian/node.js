var showMem = function (){
	var mem = process.memoryUsage();
	var format = function(bytes){
		return (bytes/1024/1024).toFixed(2) + 'MB';
	}
	console.log('process:heapTotal ' + format(mem.heapTotal) + ' heapUsed ' + format(mem.heapUsed) + ' rss ' + format(mem.rss));
	console.log('------------------------------');
}

var useMem = function(){
	var size = 20*1024*1024;
	var arr = new Array(size);
	for(var i = 0; i < arr.length; i++){
		arr[i] = 0;
	}
	return arr;
}

var total = [];

for(j = 0; j < 15; j ++){
	showMem();
	total.push(useMem());
}

showMem();


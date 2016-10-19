var fs = require('fs');

var data = fs.readFileSync('input.txt');

/*console.log(data.toString());*/

var img = fs.readFileSync('banner.jpg');
console.log(img.toString());
console.log(data);
console.log('程序执行结束！');
var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var i = 0;
var url = 'http://tieba.baidu.com/p/2644290337?see_lz=1';

request('http://tieba.baidu.com/p/2644290337?see_lz=1',function(err,result){
    if(err){
        console.log(err);
    }
    console.log(result.body);
})
console.log('end');
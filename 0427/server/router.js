var express = require('express');
var db = require('./db');
var router = express.Router();

router.post('/login', function(req, res) {
    console.log('登录');
    var info = req.body;
    if (info['username'] && info['userpwd']) {
    	var _query = {
    	}
        db.User.find(_query, function(err, data) {
            console.log(data);
        	var doc = data[0];
            doc = doc._doc;
            console.log(doc)
            switch (true) {
                case !!err:
                    console.log(err);
                    break;
                case data.length <= 0:
                    res.send({ code: 0, msg: '账号不存在' });
                    break;
                case info.username !== doc.username:
                    res.send({ code: 0, msg: '账号错误' });
                    break;
                case info.userpwd == doc.userpwd:
                    res.send({ code: 1, msg: '登录成功' });
                    break;
                case info.userpwd != doc.userpwd:
                	console.log(info.userpwd + ' / ' + doc.userpwd)
                    res.send({ code: 0, msg: '密码错误' });
                    break;
                default:
                    res.send({ msg: '未知错误' });
                    break;
            }
        })
    } else {
    	res.send({code:1000,msg:'信息不全'})
    }
})
router.post('/add',function(req,res){
    var data = req.body;
    var User = db.User;
    console.log(data)
    /*var user = new User(data);
    user.save(function(err,rep){
        if(err){
            console.log('Error' + err)
        } else {
            
        }
    })*/
    User.create(data,function(err,rep){
        if(err) throw err;
        console.log(rep);
    })
})
router.get('/query', function(req, res) {
    db.User.find({}, function(err, data) {
        if (err) {
            console.log('Error:' + err)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;

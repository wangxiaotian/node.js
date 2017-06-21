var User = require('./user.js');
var users = {};

//	插入

users.insert = function(){
	var user = new User({
		username: '王小天',
		userpwd: 'mypwd',
		userage: 24,
		userdate: new Date()
	})
	user.save(function(err,res){
		if(err){
			console.log('Error:' + err)
		} else {
			console.log('Res' + res)
		}
	})
}

//	更新
users.update = function(){
	var wherestr = {'username':'王小天'};
	var updatestr = {'userpwd':'123456'};

	User.update(wherestr,updatestr,function(err,res){
		if(err){
			console.log('Error:' + err)
		} else {
			console.log('Res:' + res)
		}
	})
}
//	查询
users.queryAll = function(callback){
	User.find({},function(err,res){
		if(err){
			console.log('Error:' + err)
		} else {
			console.log('Res' + res)
			callback(res);
		}
	})
}
//	insert();
//	update();
//	users.queryAll();
module.exports = users;
var User = require('./user');
//		插入
function insert() {
	var user = new User({
		username: 'jessea',
		userpwd: 'abcd',
		userage: 24,
		logindate: new Date()
	})
	user.save(function(err,res) {
		if (err) {
			console.log('Error:' + err)
		} else {
			console.log('Res:' + res)
		}
	})
}
insert();
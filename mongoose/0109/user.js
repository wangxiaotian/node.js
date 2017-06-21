//	用户信息
var mongoose = require('./db'),
	Schema = mongoose.Schema;
var UserSchema = new Schema({
	username: {type: String},
	userpwd: {type: String},
	userage: Number,
	logindate: Date
})
module.exports = mongoose.model('User',UserSchema);
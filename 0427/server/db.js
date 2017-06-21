var mongoose = require('mongoose'),
	DB_URL = 'mongodb://localhost:27017/test';
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;

mongoose.connect(DB_URL);

mongoose.connection.on('connected',function(err,res){
	if(err){
		console.log('Error:' + err)
	} else {
		console.log('mongoose connection open to ' + DB_URL)
	}
})

mongoose.connection.on('error',function(err,res){
	if(err){
		console.log('Error:' + err)
	} else {
		console.log('Res' + res)
	}
})

mongoose.connection.on('disconnected',function(err,res){
	if(err){
		console.log('Error' + err)
	} else {
		console.log('mongoose connection has been shutdown!')
	}
})



var UserSchema = new Schema({
	username: {type: String},
	password: {type: String},
	nickname: {type: String}
})

var Models = {
	User: mongoose.model('User',UserSchema)
}

module.exports = Models;


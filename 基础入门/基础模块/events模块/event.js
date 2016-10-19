var events = require('events');

var emitter = new events.EventEmitter();

//	绑定事件
emitter.on('someEvent',function(arg1,arg2){
	console.log('listener1',arg1,arg2);
})

emitter.on('someEvent',function(arg1,arg2){
	console.log('listener2',arg1,arg2)
})

//	触发事件
emitter.emit('someEvent','arg1参数','arg2参数');

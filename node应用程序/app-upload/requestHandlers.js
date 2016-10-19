function start(){
	console.log('Request handler "start" was called.');
	return 'start';
}

function upload(){
	console.log('Request handler "upload" was called.');
	return 'upload';
}

exports.start = start;
exports.upload = upload;
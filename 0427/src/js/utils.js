var utils = {};
utils.ready = function(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',function(){
			document.removeEventListener('DOMContentLoaded',arguments.callee,false);
			fn();
		},false)
	} else if(document.attachEvent){
		document.attachEvent('onreadystatechange',function(){
			if(document.readyState === 'complete'){
				document.detachEvent('onreadystatechange',arguments.callee);
				fn();
			}
		})
	}
}

utils.ajax = function ajax(params) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                var data = JSON.parse(xhr.response);
                params.success && params.success(data);
            }
        }
    }
    xhr.open(params.type, params.url, true);
    var headers = params.headers;
    for (key in headers) {
        xhr.setRequestHeader(key, headers[key]);
    }
    xhr.send(params.data);
}

window.utils = utils;
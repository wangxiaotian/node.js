##  node小程序
	在B/S中，客户端首先发起请求，比如说请求一个静态资源，一个json文件

	服务层：客户端的请求会在服务器端的服务器通过端口的变化监听到，此时捕获到了客户端的请求

	路由层：服务器接收到请求后会进行解析url地址，根据路由逻辑将不同的url请求分发到相应的路由处理程序

	处理层：处理层由路由层调用，当url解析完成传递给路由，路由即会触发回调，调用路由处理程序，映射过来的地址做出相应的响应和处理，返回数据。


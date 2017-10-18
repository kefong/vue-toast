import view from './view'
var Toast = {
		vm: null,
		body: null,
		opt: {
			type: 'success',//error, 
			delay: 3000,
			top: 5,
		}
}
Toast.install = function(Vue, options){
	// Vue
	Toast.vm = Vue;
	
	// 初始化配置
	for (var property in options) {
		Toast.opt[property] = options[property];
    }
	
	// 创建容器
	if(Toast.body === null){
		Toast.body = document.createElement('div');
		Toast.body.className = 'kefong-vue-toast';
		document.body.appendChild(Toast.body);
	}
	
	Vue.prototype.$toast = function(message, opt){
		// 设置message和type
		if(typeof(opt) === 'string'){
			Toast.opt.type = opt;
		}else if(typeof(opt) === 'object'){
			for (var property in opt) {
				Toast.opt[property] = opt[property];
		    }
		}
		
		//console.log(opt.type);
		// 生成div并显示到当前页面
		var toastView = Vue.component('toast-view', view);
		var v = new toastView();
		v.message = message;
		v.type = 'kefong-toast-'+ Toast.opt.type;
		v.delay = Toast.opt.delay;
		v.top = Toast.opt.top;
		Toast.body.appendChild(v.$mount().$el);
	}
	
	// 报错提醒
	Vue.prototype.$toast.error = function(message, opt){
		if(typeof(opt) === 'undefined'){
			opt = {type: 'error'}
		}else if(typeof(opt) === 'object'){
			opt.type = 'error';
		}else if(typeof(opt) === 'string'){
			opt = 'error';
		}		
		Vue.prototype.$toast(message, opt);
	}
	
	// 成功提醒
	Vue.prototype.$toast.success = function(message, opt){
		if(typeof(opt) === 'undefined'){
			opt = {type: 'success'}
		}else if(typeof(opt) === 'object'){
			opt.type = 'success';
		}else if(typeof(opt) === 'string'){
			opt = 'success';
		}		
		Vue.prototype.$toast(message, opt);
	}
}
export default Toast;
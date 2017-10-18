/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author liupeng (529539000@qq.com) @kefong
*/
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
	
	// init
	for (var property in options) {
		Toast.opt[property] = options[property];
    }
	
	// create box
	if(Toast.body === null){
		Toast.body = document.createElement('div');
		Toast.body.className = 'kefong-vue-toast';
		document.body.appendChild(Toast.body);
	}
	
	Vue.prototype.$toast = function(message, opt){
		// set message | type
		if(typeof(opt) === 'string'){
			Toast.opt.type = opt;
		}else if(typeof(opt) === 'object'){
			for (var property in opt) {
				Toast.opt[property] = opt[property];
		    }
		}
		
		// create div and show
		var toastView = Vue.component('toast-view', view);
		var v = new toastView();
		v.message = message;
		v.type = 'kefong-toast-'+ Toast.opt.type;
		v.delay = Toast.opt.delay;
		v.top = Toast.opt.top;
		Toast.body.appendChild(v.$mount().$el);
	}
	
	// error
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
	
	// success
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
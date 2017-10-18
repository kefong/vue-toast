<template>
	<transition name="fade">
		<div v-if="show" :class="type" class="kefong-toast" v-on:click="close" :style="{top: top + 'px'}">{{ message }}</div>
	</transition>
</template>
<script>
require('./css/iconfont/iconfont.css')
export default {
	name: 'toast-view',
	data: function(){
		return {
			message: '',
			show: true,
			delay: 3000,
			type: 'kefong-toast-success',
			top: 5
		}
	},
	props: {},
	directives: {},
	created: function(){
		var that = this;
		setTimeout(function(){
			that.close();			
		}, 3000);
	},
	methods: {
		close: function(){
			this.show = false;
		}
	}
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
@font-face {font-family: "iconfont";
  src: url('./css/iconfont/iconfont.eot?t=1508293806726'); /* IE9*/
  src: url('./css/iconfont/iconfont.eot?t=1508293806726#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./css/iconfont/iconfont.ttf?t=1508293806726') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./css/iconfont/iconfont.svg?t=1508293806726#iconfont') format('svg'); /* iOS 4.1- */
}
.kefong-toast {
	position: fixed;
	top: 0px;
	right: 5px;
	width: 200px;	
	padding: 10px;
	border-radius: 4px;	
	font-size: 12px;
	cursor: pointer;
	color: #fff;	
}
.kefong-toast:BEFORE {
	font-family:"iconfont" !important;
	font-size:1.6em;	
	padding-right: 6px;
	vertical-align:middle;
	display:inline-block;
	margin-top: -2px;
}
.kefong-toast:AFTER {
	font-family:"iconfont" !important;
	font-size:1.4em;
	content: "\e8e8";
	vertical-align:middle;
	display:inline-block;
	margin-top: -2px;
	float: right;
}
.kefong-toast:hover:AFTER {
	font-family:"iconfont" !important;
	font-size:1.4em;
	content: "\e8e9";
	vertical-align:middle;
	display:inline-block;
	margin-top: -2px;
	float: right;
}
/* success */
.kefong-toast-success {
	background-color: #1E9FFF;
	box-shadow:0px 0px 8px #1E9FFF;
}
.kefong-toast-success:BEFORE {
	content: "\e8e4";
}
/* error */
.kefong-toast-error {	
	background-color: #FF5722;
	box-shadow:0px 0px 8px #FF5722;
}
.kefong-toast-error:BEFORE {
	content: "\e8e7";
}
</style>
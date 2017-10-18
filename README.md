# vue-toast
A toast plugin for vue2.
## Install
Use npm to download code:
```
npm install kefong/vue-toast
```
then import it into your project, add below code into your `main.js`:
```js
import vueToast from 'vue-toast'
Vue.use(vueToast)
```
## Usage
```html
<template>
  <div class="toast">
  	<button v-on:click="$toast.success('Success!!')">Success</button>
  	<button v-on:click="$toast.error('Error!!')">Error</button>
  	<div></div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data () {
    return {
    }
  },
  created: function(){
	  this.$toast.success('Success!!');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
```
## Demo
[demo](http://www.kefong.com/vue/#/toast)

## Screenshot
<img src="http://www.kefong.com/vue/1.png">
<img src="http://www.kefong.com/vue/2.png">
import Vue from 'vue'
import App from './App.vue'
import lineClamp from 'vue-line-clamp'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.use(PerfectScrollbar)
 
Vue.use(lineClamp, {
  // plugin options
})

new Vue({
  el: '#app',
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'
import Mock from './mock' 
import axios from 'axios'

Mock.bootstrap()

axios.defaults.baseURL = 'http://mockjs.com/api' 

Vue.prototype.$http = axios

import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
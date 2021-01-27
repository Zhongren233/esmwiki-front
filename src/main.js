import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://es.akina.xyz/'
Vue.prototype.$http = axios
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

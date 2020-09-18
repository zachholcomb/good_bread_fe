import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './css/main.css'
import ApiService from './common/api.service'

Vue.config.productionTip = false
ApiService.init()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

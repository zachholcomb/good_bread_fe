import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './css/main.css'
import ApiService from './common/api.service'
import FlashMessage from '@smartweb/vue-flash-message'

Vue.config.productionTip = false
Vue.use(FlashMessage)

ApiService.init()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

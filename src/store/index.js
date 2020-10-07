import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth.module'
import shop from './shop.module'
import dashboard from './dashboard.module'
import cart from './cart.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    dashboard,
    shop,
    cart
  }
})

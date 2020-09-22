import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import HomePage from '@/views/HomePage.vue'
import UserDashboard from '@/views/UserDashboard.vue'
import Cart from '@/views/Cart.vue'
import Shop from '@/views/Shop.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: HomePage,
      component: HomePage
    },
    {
      path: '/register',
      name: Register,
      component: Register
    },

    {
      path: '/login',
      name: Login,
      component: Login
    },
    {
      path: '/dashboard',
      name: UserDashboard,
      component: UserDashboard
    },
    {
      path: '/cart',
      name: Cart,
      component: Cart
    },
    {
      path: '/shop',
      name: Shop,
      component: Shop
    }
  ]
})

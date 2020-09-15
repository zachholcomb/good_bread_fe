import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Dashboard from '@/components/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: Home,
      component: Home
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
      name: Dashboard,
      component: Dashboard
    }
  ]
})

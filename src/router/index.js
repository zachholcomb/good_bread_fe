import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/views/Register.vue'
import RegisterSubscription from '@/views/RegisterSubscription.vue'
import Login from '@/views/Login.vue'
import HomePage from '@/views/HomePage.vue'
import UserDashboard from '@/views/UserDashboard.vue'
import Cart from '@/views/Cart.vue'
import CartLogin from '@/views/CartLogin.vue'
import CartCheckout from '@/views/CartCheckout.vue'
import Shop from '@/views/Shop.vue'
import Order from '@/views/Order.vue'
import Subscription from '@/views/Subscription.vue'
import AboutPage from '@/views/AboutPage.vue'

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
      path: '/register/subscription',
      name: RegisterSubscription,
      component: RegisterSubscription
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
    },
    {
      path: '/cart/login',
      name: CartLogin,
      component: CartLogin
    },
    {
      path: '/cart/checkout',
      name: CartCheckout,
      component: CartCheckout
    },
    {
      name: "Order",
      path: '/orders/:slug',
      component: Order,
      props: true
    },
    {
      name: 'Subscription',
      path: '/subscription',
      component: Subscription,
    },
    {
      name: 'AboutPage',
      path: '/about',
      component: AboutPage
    }
  ]
})

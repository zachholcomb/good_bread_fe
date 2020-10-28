<template>
  <header class="pt-8 pb-12">
    <nav 
      :class="{ 'scrolled': !view.atTopOfPage }"
      class="fixed flex w-full bg-white border-b items-center justify-between flex-wrap p-5 m-auto top-0 animated"
    >
        <div>
          <router-link class="link-gray px-2 uppercase tracking-widest" to="/">Good Bread</router-link>
        </div>
        <div class="flex justify-center">
          <router-link class="link-gray px-4" to="/shop">Order Online</router-link>
          <router-link class="link-gray px-4" to="/dashboard" v-if="signedIn">Dashboard</router-link>
        </div>
        <div class="flex justify-end">
          <router-link class="link-gray px-4" to="/cart">Cart</router-link>
          <router-link class="link-gray px-4" to="/login" v-if="!signedIn">Login</router-link>
          <router-link class="link-gray px-4" to="/register" v-if="!signedIn">Register</router-link>
          <a href="#" @click.prevent="signOut" class="link-gray px-2" v-if="signedIn">Log out</a>
        </div>
    </nav>
  </header>
</template>
<script>
import { LOGOUT } from '@/store/actions.type'
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  data () {
    return {
      view: {
        atTopOfPage: true
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    signOut () {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.replace('/'))
    },
    handleScroll () {
      if(window.pageYOffset > 0) {
        if(this.view.atTopOfPage) this.view.atTopOfPage = false
      } else {
        if(!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    }
  },
  computed: {
    ...mapGetters(['signedIn'])
  }
}
</script>

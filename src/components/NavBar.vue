<template>
  <header class="pt-8 pb-8">
    <nav 
      :class="{ 'scrolled': !view.atTopOfPage }"
      class="fixed flex w-full bg-white border-b items-center justify-between flex-wrap p-6 m-auto top-0 animated"
    >
        <div>
          <router-link
            v-on:click.native='selectPage(1)'
            :class="{ 'selected' : currentPage == 1 }"
            class="link-gray px-2 uppercase tracking-widest" 
            to="/"
          >
            Good Bread
          </router-link>
        </div>
        <div class="flex justify-center">
          <router-link
            v-on:click.native='selectPage(2)'
            :class="{ 'selected' : currentPage == 2 }"
            class="link-gray px-4" 
            to="/shop"
          >
            Order Online
          </router-link>
          <router-link 
            v-on:click.native='selectPage(3)'
            :class="{ 'selected' : currentPage == 3 }"
            class="link-gray px-4" 
            to="/dashboard" 
            v-if="signedIn"
          >
            Dashboard
          </router-link>
        </div>
        <div class="flex justify-end">
          <router-link
            v-on:click.native='selectPage(4)'
            :class="{ 'selected' : currentPage == 4 }"
            class="link-gray px-4" 
            to="/cart"
          >
            Cart
          </router-link>
          <router-link
            v-on:click.native='selectPage(5)'
            :class="{ 'selected' : currentPage == 5 }"
            class="link-gray px-4" 
            to="/login" 
            v-if="!signedIn"
          >
            Login
          </router-link>
          <router-link
            v-on:click.native='selectPage(6)'
            :class="{ 'selected' : currentPage == 6 }"
            class="link-gray px-4" 
            to="/register" 
            v-if="!signedIn"
          >
            Register
          </router-link>
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
      },
      currentPage: 1
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
        .then(() => this.currentPage = 1)
    },
    handleScroll () {
      if(window.pageYOffset > 0) {
        if(this.view.atTopOfPage) this.view.atTopOfPage = false
      } else {
        if(!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    },
    selectPage (selectedPage) {
      console.log(selectedPage)
      this.currentPage = selectedPage
    }
  },
  computed: {
    ...mapGetters(['signedIn'])
  }
}
</script>

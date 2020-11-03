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
            class="link-gray px-2 uppercase tracking-widest text-xl" 
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
        <div class="flex justify-end align-middle block">
          <router-link
            v-on:click.native='selectPage(4)'
            :class="{ 'selected' : currentPage == 4 }"
            class="link-gray px-4 relative flex" 
            to="/cart"
          >
            <svg class="flex-1 w-6 h-8 fill-current" viewbox="0 0 24 24">
              <path 
                d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
            </svg>
            <span 
              class="absolute right-0 top-0 rounded-full bg-red-400 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center"
              v-show="checkCart()"
            >
              {{ countCart() }}
            </span>
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
      this.currentPage = selectedPage
    },
    checkCart () {
      return Object.keys(this.getCart).length !== 0
    },
    countCart () {
      return Object.keys(this.getCart).length
    }
  },
  computed: {
    ...mapGetters(['signedIn', 'getCart'])
  }
}
</script>

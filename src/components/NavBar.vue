<template>
  <header class="bg-gray-200 py-6">
    <div class="container m-auto flex flex-wrap jutify-end grid grid-cols-3">
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
    </div>
  </header>
</template>
<script>
import { LOGOUT } from '@/store/actions.type'
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  methods: {
    signOut () {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.replace('/'))
    }
  },
  computed: {
    ...mapGetters(['signedIn'])
  }
}
</script>

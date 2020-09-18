<template>
  <header class="bg-gray-200 py-4">
    <div class="container m-auto flex flex-wrap items-center jutify-end">
      <div>
        <router-link class="link-gray px-2" to="/">Home</router-link>
        <router-link class="link-gray px-2" to="/login" v-if="!signedIn">Login</router-link>
        <router-link class="link-gray px-2" to="/register" v-if="!signedIn">Register</router-link>
        <router-link class="link-gray px-2" to="/dashboard" v-if="signedIn">Dashboard</router-link>
        <a href="#" @click.prevent="signOut" class="link-gray px-2" v-if="signedIn">Log out</a>
      </div>
    </div>
  </header>
</template>

<script>
import { LOGOUT } from '@/store/actions.type'
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
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

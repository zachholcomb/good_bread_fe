<template>
  <header class="bg-gray-200 py-4">
    <div class="container m-auto flex flex-wrap items-center jutify-end">
      <div>
        <router-link class="link-gray px-2" to="/">Home</router-link>
        <router-link class="link-gray px-2" to="/login" v-if="!signedIn()">Login</router-link>
        <router-link class="link-gray px-2" to="/register" v-if="!signedIn()">Register</router-link>
        <router-link class="link-gray px-2" to="/dashboard" v-if="signedIn()">Dashboard</router-link>
        <a href="#" @click.prevent="signOut" class="link-gray px-2" v-if="signedIn()">Log out</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  created () {
    this.signedIn()
  },
  methods: {
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    signedIn () {
      console.log(localStorage.signedIn)
      return localStorage.signedIn
    },
    signOut () {
      this.$http.secured.delete('/api/v1/logout')
        .then(response => {
          delete localStorage.csrf
          delete localStorage.signedIn
          this.$router.replace('/')
        })
        .catch(error => this.setError(error, 'Cannot sign out'))
    }
  }
}
</script>

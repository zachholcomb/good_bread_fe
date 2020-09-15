<template>
  <div class="max-w-sm m-auto my-8">
    <div class="border p-10 border-gray-200 shadow rounded">
      <h3 class="text-2xl mb-6 text-gray-700">Login</h3>
      <form @submit.prevent="signIn">
        <div class="text-red-600" v-if="error"> {{ error }}</div>
        <div class="mb-6">
          <label for="email" class="label">Email</label>
          <input type="email" v-model="email" class="input" id="email" placeholder="email@example.com">
        </div>
        <div class="mb-6">
          <label for="password" class="label">Password</label>
          <input type="password" v-model="password" class="input" id="password">
        </div>
        <button type="submit" class="button">Sign In</button>
        <div class="my-4">
          <router-link to="/dashboard" class="link-gray">Or Register</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  created () {
    this.checkSignedIn()
  },
  updated () {
    this.checkSignedIn()
  },
  methods: {
    signIn () {
      this.$http.plain.post('/api/v1/login', { email: this.email, password: this.password })
        .then(response => this.signinSuccessful(response))
        .catch(error => this.signinFailed(error))
    },
    signinSuccessful (response) {
      if (!response.data.csrf) {
        this.signinFailed(response)
        return
      }

      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      this.$router.replace('/dashboard')
    },
    signinFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) || ''
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkSignedIn () {
      if (localStorage.signedIn) {
        this.$router.replace('/dashboard')
      }
    }
  }
}
</script>

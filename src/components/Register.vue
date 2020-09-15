<template>
  <div class="max-w-sm m-auto my-8">
    <div class="border p-10 border-grey-light shadow rounded">
      <h3 class="text-2xl mb-6 text-gray-700">Sign Up</h3>
      <form @submit.prevent="register">
        <div class="text-red-600" v-if="error">{{ error }}</div>
        <div class="mb-6">
          <label for="email" class="label">Email</label>
          <input type="email" v-model="email" class="input" id="email" placeholder="email@example.com">
        </div>

        <div class="mb-6">
          <label for="name" class="label">Name</label>
          <input type="name" v-model="name" class="input" id="name" placeholder="Bread Loaf">
        </div>

        <div class="mb-6">
          <label for="address" class="label">Address</label>
          <input type="address" v-model="address" class="input" id="address" placeholder="12345 Place Pl.">
        </div>

        <div class="mb-6">
          <label for="password" class="label">Password</label>
          <input type="password" v-model="password" class="input" id="password">
        </div>

        <div class="mb-6">
          <label for="password-confirmation" class="label">Retype Password</label>
          <input type="password-confirmation" v-model="password_confirmation" class="input" id="password-confirmation">
        </div>

        <button type="submit" class="button">Register</button>
        <div class="my-4">
          <router-link to="/signin" class="link-gray">Log In</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      name: '',
      address: '',
      password: '',
      password_confirmation: '',
      error: ''
    }
  },
  created () {
    this.checkedSignedIn()
  },
  updated () {
    this.checkedSignedIn()
  },
  methods: {
    register () {
      this.$http.plain.post('/api/v1/register', { email: this.email,
        name: this.name,
        address: this.address,
        password: this.password,
        password_confirmation: this.password_confirmation
      })
        .then(response => this.registerSuccessful(response))
        .catch(error => this.registerFailed(error))
    },
    registerSuccessful (response) {
      if (!response.data.csrf) {
        this.registerFailed(response)
        return
      }

      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      this.$router.replace('/dashboard')
    },
    registerFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) || 'Something went wrong'
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkedSignedIn () {
      if (localStorage.signedIn) {
        this.$router.replace('/dashboard')
      }
    }
  }
}
</script>

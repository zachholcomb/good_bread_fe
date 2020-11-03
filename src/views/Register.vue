<template>
  <div class="bakery-bg">
    <div class="max-w-2xl m-auto my-8 py-20">
      <div class="border p-10 border-grey-light shadow shadow-2xl rounded bg-white">
        <h3 class="text-2xl mb-6 text-gray-700 text-center">Sign Up</h3>
        <form @submit.prevent="register">
          <div class="text-red-600" v-if="errors">{{ errors }}</div>
          <div class="mb-6 grid grid-cols-6 gap-4">
            <div class="col-span-6 sm:col-span-3">
              <label for="email" class="label">Email</label>
              <input type="email" v-model="email" class="input" id="email" placeholder="email@example.com">
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label for="name" class="label">Name</label>
              <input type="name" v-model="name" class="input" id="name" placeholder="Bread Loaf">
            </div>
            <div class="mb-2 col-span-6">
              <label for="address" class="label">Address</label>
              <input type="address" v-model="address" class="input" id="address" placeholder="12345 Place Pl.">
            </div>
            <div class="mb-2 col-span-6 sm:col-span-6 lg:col-span-2">
              <label for="city" class="label">City</label>
              <input type="city" v-model="city" class="input" id="city" placeholder="Denver">
            </div>
            <div class="mb-2 col-span-6 sm:col-span-6 lg:col-span-2">
              <label for="state" class="label">State</label>
              <input type="state" v-model="state" class="input" id="state" placeholder="CO">
            </div>
            <div class="mb-2 col-span-6 sm:col-span-6 lg:col-span-2">
              <label for="zip" class="label">Zip</label>
              <input type="zip" v-model="zip" class="input" id="zip" placeholder="12345 Place Pl.">
            </div>
            <div class="mb-2 col-span-6 sm:col-span-3">
              <label for="password" class="label">Password</label>
              <input type="password" v-model="password" class="input" id="password">
            </div>
            <div class="mb-2 col-span-6 sm:col-span-3">
              <label for="password-confirmation" class="label">Retype Password</label>
              <input type="password-confirmation" v-model="password_confirmation" class="input" id="password-confirmation">
            </div>
          </div>
          <button type="submit" class="button max-w-xs m-auto">Register</button>
          <div class="my-4">
            <router-link to="/login" class="link-gray">Log In</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { REGISTER } from '@/store/actions.type'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      password: '',
      password_confirmation: '',
      error: ''
    }
  },
  methods: {
    register () {
      this.$store
        .dispatch(REGISTER, {
          email: this.email,
          name: this.name,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
        .then(() => this.$router.replace('/dashboard'))
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
}
</script>

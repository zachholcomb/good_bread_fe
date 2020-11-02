<template>
  <div class="max-w-md m-auto my-8 py-20">
    <h3 class="text-2xl mb-6 text-gray-700 tracking-widest">Login</h3>
    <form @submit.prevent="signIn(email, password)">
      <div class="text-red-600" v-if="errors"> {{ errors }}</div>
      <div class="mb-6">
        <label for="email" class="label">Email</label>
        <input type="email" v-model="email" class="input" id="email" placeholder="email@example.com">
      </div>
      <div class="mb-6">
        <label for="password" class="label">Password</label>
        <input type="password" v-model="password" class="input" id="password">
      </div>
      <button type="submit" class="button">Sign In</button>
    </form>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { LOGIN } from '@/store/actions.type'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },

  methods: {
    signIn (email, password) {
      this.$store
        .dispatch(LOGIN, { email, password })
        .then(() => this.$router.replace('/cart/checkout'))
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
}
</script>

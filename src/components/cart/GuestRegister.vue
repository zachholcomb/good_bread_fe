<template>
<div class="max-w-3xl m-auto pt-10">
  <form @submit.prevent="checkout">
    <div class="text-red-600" v-if="errors">{{ errors }}</div>
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
      <label for="city" class="label">City</label>
      <input type="city" v-model="city" class="input" id="city" placeholder="Denver">
    </div>
    <div class="mb-6">
      <label for="state" class="label">State</label>
      <input type="state" v-model="state" class="input" id="state" placeholder="CO">
    </div>
    <div class="mb-6">
      <label for="zip" class="label">Zip</label>
      <input type="zip" v-model="zip" class="input" id="zip" placeholder="12345 Place Pl.">
    </div>
    <div class="max-w-md m-auto">
      <button type="submit" class="button">Complete Payment</button>
    </div>
  </form>
</div>
</template>
<script>
export default {
  name: 'GuestRegister',
  data () {
    return {
      email: '',
      name: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    }
  },
  methods: {
    checkout () {

    }
  }
}
</script>

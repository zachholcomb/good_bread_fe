<template>
<div class="max-w-3xl m-auto pt-10">
  <form @submit.prevent="checkoutGuest">
    <div class="text-red-600" v-if="errors">{{ errors }}</div>
    <div class="mb-6 grid grid-cols-6 gap-4">
      <div class="col-span-6 sm:col-span-3 mb-6">
        <label for="email" class="label">Email</label>
        <input type="email" v-model="email" class="input" id="email" placeholder="email@example.com">
      </div>
      <div class="col-span-6 sm:col-span-3 mb-6">
        <label for="name" class="label">Name</label>
        <input type="name" v-model="name" class="input" id="name" placeholder="Bread Loaf">
      </div>
      <div class="col-span-6 mb-6">
        <label for="address" class="label">Address</label>
        <input type="address" v-model="address" class="input" id="address" placeholder="12345 Place Pl.">
      </div>
      <div class="mb-6 col-span-6 sm:col-span-6 lg:col-span-2">
        <label for="city" class="label">City</label>
        <input type="city" v-model="city" class="input" id="city" placeholder="Denver">
      </div>
      <div class="mb-6 col-span-6 sm:col-span-6 lg:col-span-2">
        <label for="state" class="label">State</label>
        <input type="state" v-model="state" class="input" id="state" placeholder="CO">
      </div>
      <div class="mb-6 col-span-6 sm:col-span-6 lg:col-span-2">
        <label for="zip" class="label">Zip</label>
        <input type="zip" v-model="zip" class="input" id="zip" placeholder="12345 Place Pl.">
      </div>
    </div>
    <div class="max-w-xs m-auto">
        <button type="submit" class="button">Complete Payment</button>
    </div>
  </form>
</div>
</template>
<script>
import { GUEST_ORDER } from '@/store/actions.type'

export default {
  name: 'GuestRegister',
  data () {
    return {
      email: '',
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      role: 'Guest'
    }
  },
  props: {
    cart: Object
  },
  methods: {
    checkoutGuest () {
      const params = {
        userParams: {
          email: this.email,
          name: this.name,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
          role: this.role
        },
        items: this.cart
      }
      this.$store
          .dispatch(GUEST_ORDER, params)
      this.flashMessage.success({
        title: 'Order Successfully Processed!',
        message: 'An email containing the order details was sent to the email you provided',
        time: 0,
        blockClass: 'flash-message-block'
      })
      this.$router.replace('/')
    }
  }
}
</script>

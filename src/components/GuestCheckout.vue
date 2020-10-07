<template>
  <div class="max-w-lg m-auto my-8 py-20 px-10">
    <h3 class="text-2xl mb-6 text-gray-700 tracking-widest">Guest Checkout</h3>
    <p class="pb-10 text-gray-700 pt-2">
      We'll send you a confirmation email but you won't be able to sign in to our website. Register a new account if you don't already have one with us.
    </p>
    <button
      type="submit"
      class="button"
      @click="checkout"
    >
      Checkout As a Guest
    </button>
  </div>
</template>
<script>
export default {
  name: 'GuestCheckout',
  methods: {
    checkout () {
      this.$router.replace('/cart/checkout')
    }
  }
}
</script>

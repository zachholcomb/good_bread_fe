<template>
  <div class="max-w-2xl m-auto p-12">
    <div class="grid grid-cols-2 border border-gray-200 shadow rounded divide-x">
      <UserCheckout></UserCheckout>
      <GuestCheckout></GuestCheckout>
    </div>
  </div>
</template>
<script>
import GuestCheckout from '@/components/GuestCheckout.vue'
import UserCheckout from '@/components/UserCheckout.vue'

export default {
  name: 'CartLogin',
  components: {
    GuestCheckout,
    UserCheckout
  }
}
</script>

<template>
  <div class="max-w-xl m-auto text-center">
    <div class="border p-10 border-gray-200 shadow rounded">
      <h3 class="text-4xl mb-8 text-gray-700">Order History</h3>
      <div v-for="order in userOrders" v-bind:key="order.id">
        {{ order.attributes.status }} {{ order.attributes.delivery_date }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { USER_ORDERS } from '@/store/actions.type'

export default {
  name: 'OrderHistory',
  beforeCreate () {
    const params = {
      token: this.$store.getters['getToken'],
      userId: this.$store.getters['getUser'].id
    }
    this.$store
      .dispatch(USER_ORDERS, params)
  },
  computed: {
    ...mapGetters(['userOrders'])
  }
}
</script>

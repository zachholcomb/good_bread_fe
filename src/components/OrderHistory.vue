<template>
  <div class="text-center">
    <h3>Order History</h3>
    <div v-for="order in userOrders" v-bind:key="order.id">
      {{ console.log(userOrders) }}
      {{ console.log("OrderHISTORY", order) }}
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

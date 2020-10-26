<template>
  <div class="max-w-2xl m-auto text-center bg-white">
    <div class="border p-10 border-gray-200 shadow rounded">
      <h3 class="text-4xl mb-8 text-gray-700 tracking-wider font-thin">Order History</h3>
      <div class="divide-y divide-gray-400 w-48 m-auto">
        <div v-for="order in userOrders" v-bind:key="order.id" class="link-gray pt-2">
          <OrderRow v-bind:order="order"></OrderRow>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { USER_ORDERS } from '@/store/actions.type'
import OrderRow from '@/components/OrderRow.vue'

export default {
  name: 'OrderHistory',
  components: {
    OrderRow
  },
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

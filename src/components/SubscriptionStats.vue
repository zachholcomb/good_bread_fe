<template>
  <div class="max-w-sm m-auto flex bg-white">
    <div class="border p-10 border-gray-200 shadow rounded text-gray-700">
      <h3 class="text-4xl mb-8">Your Subscription</h3>
      <h3>Type: {{ userSub.subscription_type }}</h3>
      <h3>Ship Date: {{ userSub.delivery_day }}</h3>
      <div class="divide-y divide-gray-400 w-48 m-auto text-center">
        <div v-for="shipment in userShipments" v-bind:key="shipment.id" class="max-w-xs m-auto pt-2">
          <p>{{ shipment.attributes.status }} {{ shipment.attributes.delivery_date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { USER_SUB } from '@/store/actions.type'
import { mapGetters } from 'vuex'

export default {
  name: 'SubscriptionStats',

  mounted () {
    const params = {
      token: this.$store.getters['getToken'],
      userId: this.$store.getters['getUser'].id
    }
    this.$store
      .dispatch(USER_SUB, params)
  },
  computed: {
    ...mapGetters(['userSub', 'userShipments'])
  }
}
</script>

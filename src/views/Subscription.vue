<template>
  <div class="text-gray-700 bakery-bg">
    <div class="max-w-2xl m-auto border border-green-200 rounded-lg shadow shadow-xl bg-white container pb-4">
      <h3 class="text-4xl p-8 tracking-widest font-thin text-green-700 text-center">
        Your Subscription
      </h3>
      <div class="max-w-lg m-auto divide-y">
        <div class="text-xl font-thin p-6 text-center">
          <h3>
            Subscription Type: {{ userSub.subscription_type }}
          </h3>
          <h3>
            Expected Ship Date: {{ userSub.delivery_day }}
          </h3>
        </div>
        <!-- <div class="p-6">
          <h3 class="text-center text-2xl tracking-wider">
            Items
          </h3>
        </div> -->
        <h3 class="text-center text-2xl tracking-wider p-2">
          Shipment History
        </h3>
        <div
          class="text-center p-6"
          v-for="shipment in userShipments"
          v-bind:key="shipment.id"
        >
          {{ shipment.attributes.delivery_date }}
          {{ shipment.attributes.status }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { USER_SUB_SHIPMENTS } from '@/store/actions.type'
import { mapGetters } from 'vuex'
export default {
  name: 'Subscription',
  mounted () {
    this.$store
      .dispatch(USER_SUB_SHIPMENTS)
  },
  computed: {
    ...mapGetters(['userSub', 'userShipments'])
  }
}
</script>
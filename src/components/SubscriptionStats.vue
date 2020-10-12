<template>
  <div class="max-w-2xl m-auto flex bg-white border p-10 border-gray-200 shadow rounded text-gray-700">
    <UpdateModal v-model="modalOpen">
      <div class="text-gray-700 center-text">
        <h3 class="text-4xl">Update Shipping Address</h3>
        <form @submit.prevent="updateSubscription">
          <!-- <div class="text-red-600" v-if="errors">{{ errors }}</div> -->
          <div class="mb-6">
            <label for="status" class="label">Subscription Type</label>
            <input type="name" v-model="userSub.subscription_type" class="input" id="name" placeholder="Bread Loaf">
          </div>
          <div class="mb-6">
            <label for="Ship Day" class="label">Preferred Delivery Date</label>
            <input type="address" v-model="userSub.delivery_day" class="input" id="address" placeholder="12345 Place Pl.">
          </div>
          <button
            type="submit"
            class="flex-shrink-0 border-transparent border-4 bg-teal-500 hover:bg-teal-800 text-sm py-1 px-20 rounded text-white"
          >
            Update
          </button>
        </form>
      </div>
    </UpdateModal>
    <div class="m-auto">
      <h3 class="text-4xl mb-8 tracking-wider font-thin">Your Subscription</h3>
      <h3>Type: {{ userSub.subscription_type }}</h3>
      <h3>Ship Date: {{ userSub.delivery_day }}</h3>
      <div class="divide-y divide-gray-400 w-48 m-auto">
        <div v-for="shipment in userShipments" v-bind:key="shipment.id" class="max-w-xs m-auto pt-2">
          <p>{{ shipment.attributes.status }} {{ shipment.attributes.delivery_date }}</p>
        </div>
      </div>
      <div class="text-center pt-4">
        <button
          class="flex-shrink-0 border-transparent border-4 bg-teal-500 hover:bg-teal-800 text-sm py-1 px-8 rounded text-white"
          @click.prevent="openModal"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { USER_SUB, UPDATE_SUB } from '@/store/actions.type'
import { mapGetters } from 'vuex'
import UpdateModal from '@/components/UpdateModal.vue'

export default {
  name: 'SubscriptionStats',
  components: {
    UpdateModal
  },
  data () {
    return {
      modalOpen: false
    }
  },
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
  },
  methods: {
    openModal () {
      this.modalOpen = true
    },
    updateSubscription () {
      const params = {
        token: this.$store.getters['getToken'],
        userId: this.$store.getters['getUser'].id,
        update_sub: {
          subscription_type: this.userSub.subscription_type,
          delivery_day: this.userSub.delivery_day
        }
      }
      this.modalOpen = false
      this.$store
        .dispatch(UPDATE_SUB, params)
    }
  }
}
</script>

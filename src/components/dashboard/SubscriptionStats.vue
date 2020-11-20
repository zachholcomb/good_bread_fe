<template>
  <div class="max-w-2xl m-auto flex bg-white border p-10 border-gray-200 shadow rounded text-gray-700">
    <UpdateModal v-model="modalOpen">
      <div class="text-gray-700 center-text">
        <h3 class="text-4xl">Update Subscription Details</h3>
        <form @submit.prevent="updateSubscription">
          <div class="text-red-600" v-if="errors">{{ errors }}</div>
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
    <div class="m-auto text-center">
      <router-link 
        class="text-4xl mb-8 tracking-wider font-thin hover:text-green-600"
        to="/subscription"
      >
        Your Subscription
      </router-link>
      <h3>Type: {{ userSub.subscription_type }}</h3>
      <h3>Ship Date: {{ userSub.delivery_day }}</h3>
      <div class="divide-y divide-gray-400 w-48 m-auto">
        <h3 class="py-4 text-xl font-thin tracking-wider">Next Shipment</h3>
        {{ userNextShipment.delivery_date }} {{ userNextShipment.status }}
      </div>
      <div class="text-center pt-4">
        <!-- <button
          class="flex-shrink-0 border-transparent border-4 bg-teal-500 hover:bg-teal-800 text-sm py-1 px-8 rounded text-white"
          @click.prevent="openModal"
        >
          Edit
        </button> -->
      </div>
    </div>
  </div>
</template>
<script>
import { USER_SUB, UPDATE_SUB } from '@/store/actions.type'
import { mapGetters } from 'vuex'
import UpdateModal from '@/components/utilities/UpdateModal.vue'

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
    ...mapGetters(['userSub', 'userNextShipment'])
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

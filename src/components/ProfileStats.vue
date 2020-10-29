<template>
  <div class="max-w-2xl m-auto flex bg-white border p-10 border-gray-200 shadow rounded text-gray-700">
    <UpdateModal v-model="modalOpen">
      <div class="text-gray-700 center-text">
        <h3 class="text-4xl pb-6">Update Shipping Address</h3>
        <form @submit.prevent="updateShipping">
          <!-- <div class="text-red-600" v-if="errors">{{ errors }}</div> -->
          <div class="mb-6">
            <label for="name" class="label">Name</label>
            <input type="name" v-model="getUser.name" class="input" id="name" placeholder="Bread Loaf">
          </div>
          <div class="mb-6">
            <label for="address" class="label">Address</label>
            <input type="address" v-model="getUser.address" class="input" id="address" placeholder="12345 Place Pl.">
          </div>
          <div class="mb-6">
            <label for="city" class="label">City</label>
            <input type="city" v-model="getUser.city" class="input" id="city" placeholder="Denver">
          </div>
          <div class="mb-6">
            <label for="state" class="label">State</label>
            <input type="state" v-model="getUser.state" class="input" id="state" placeholder="CO">
          </div>
          <div class="mb-6">
            <label for="zip" class="label">Zip</label>
            <input type="zip" v-model="getUser.zip" class="input" id="zip" placeholder="12345 Place Pl.">
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
      <h3 class="text-4xl mb-8 text-gray-700 tracking-wider font-thin">Account Settings</h3>
      <h3 class="text-2xl text-gray-700">{{ getUser.name }}</h3>
      <h3 class="text-xl text-gray-700">{{ getUser.address }}</h3>
      <h3 class="text-xl text-gray-700">{{ getUser.email }}</h3>
      <h3 class="text-xl text-gray-700">{{ getUser.city }}, {{ getUser.state }}</h3>
      <h3 class="text-xl text-gray-700">{{ getUser.zip }}</h3>
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
import { mapGetters } from 'vuex'
import { UPDATE_USER } from '@/store/actions.type'
import UpdateModal from '@/components/UpdateModal.vue'

export default {
  name: 'ProfileStats',
  components: {
    UpdateModal
  },
  data () {
    return {
      modalOpen: false
    }
  },
  methods: {
    openModal () {
      this.modalOpen = true
    },
    updateShipping () {
      this.modalOpen = false
      this.$store
        .dispatch(UPDATE_USER, this.getUser)
    },
    mounted () {
      console.log(this.getUser)
    }
  },
  computed: {
    ...mapGetters(['signedIn', 'getUser'])
  }
}

</script>

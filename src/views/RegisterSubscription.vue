<template>
  <div class="bakery-bg">
    <div class="max-w-2xl m-auto my-8 py-20">
      <div class="border p-10 border-grey-light shadow shadow-2xl rounded bg-white">
        <h3 class="text-2xl mb-2 text-gray-700 text-center">Almost Finished! We Just Need A Couple Details</h3>
        <p class="text-gray-700 text-center pt-8 pb-20">
          We're excited you want to set up a subscription with us! Simply let us know how many loaves you'd like
          to receive every week and if you're open to trying new flavors out. We'll take care of the rest and you
          can start expecting fresh bread at your door step next week.
        </p>
        <form @submit.prevent="register_subscription">
          <div class="text-red-600" v-if="errors">{{ errors }}</div>
          <div class="mb-6 grid grid-cols-6 gap-4">
            <div class="col-span-6 sm:col-span-3 pb-8">
              <label for="loavesAmount" class="label">How many loaves do you want a week?</label>
              <vSelect
                v-model="loavesAmount"
                class="v-select"
                placeholder="Select One"
                :options="['1', '2', '3']"
              >
              </vSelect>
            </div>
            <div class="col-span-6 sm:col-span-3 pb-8">
              <label for="flavorBool" class="label">Are you open to different flavors?</label>
              <vSelect
                v-model="flavorBool"
                class="v-select"
                placeholder="Select One"
                :options="['Yes surprise me', 'Keep it simple stupid.']"
              >
              </vSelect>
            </div>
          <div class="mb-2 col-span-6 pb-8">
              <label for="allergies" class="label">Any Allergies we should know about?</label>
              <input type="allergies" v-model="allergies" class="input" id="allergies" placeholder="Nuts, Blueberries, etc.">
              <p class='text-gray-500 py-2 text-sm font-thin'>
                **NOTE** We have some breads with fruit/nuts in them. 
                At this time, we do not offer any gluten free options. 
              </p>
            </div>
          </div>
          <button type="submit" class="button max-w-xs m-auto">Set up Subscription</button>
          <div class="my-4">
            <router-link to="/dashboard" class="link-gray">I'll do this Later!</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import vSelect from 'vue-select'
import { REGISTER, SET_UP_SUBSCRIPTION } from '@/store/actions.type'

export default {
  name: 'RegisterSubscription',
  data () {
    return {
      loavesAmount: '',
      flavorBool: '',
      allergies: ''
    }
  },
  methods: {
    register_subscription () {
      this.$store
        .dispatch(SET_UP_SUBSCRIPTION, {
          "amount": this.loavesAmount,
          "allergies": this.allergies,
          "flavors?": this.flavorBool
        })
        .then(() => this.$router.replace('/dashboard'))
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  },
  components: {
    vSelect
  }
}
</script>

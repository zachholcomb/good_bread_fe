<template>
<div>
  <div class="text-4xl text-center text-gray-700 p-32" v-show="!checkCart()">
      Whoops! No Items in Cart!
  </div>
  <GuestRegister v-show="!signedIn && checkCart()"></GuestRegister>
  <div
    class="divide-y divide-gray-400 max-w-4xl m-auto pt-8 pb-8"
    v-show="checkCart()"
  >
    <div
      v-for="item in Object.entries(getCart)"
      v-bind:key="item.id"
    >
      <CartItem v-bind:item="item"></CartItem>
    </div>
    <div class="max-w-md m-auto">
      <button type="submit" class="button" @click="completePayment">Complete Payment</button>
    </div>
  </div>
</div>
</template>
<script>
import CartItem from '@/components/CartItem.vue'
import GuestRegister from '@/components/GuestRegister.vue'
import { mapGetters } from 'vuex'
import { SET_ORDER } from '@/store/actions.type'

export default {
  name: 'CartCheckout',
  components: {
    CartItem,
    GuestRegister
  },
  computed: {
    ...mapGetters(['getCart',
      'getUser',
      'signedIn',
      'getToken'])
  },
  methods: {
    checkCart () {
      return Object.keys(this.getCart).length !== 0
    },
    completePayment () {
      const params = {
        user: this.getUser,
        cart: this.getCart,
        token: this.getToken
      }
      this.$store
        .dispatch(SET_ORDER, params)
      if (this.getUser.role === 'user') {
        this.$router.replace('/dashboard')
      } else {
        this.$router.replace('/')
      }
    }
  }
}
</script>

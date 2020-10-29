<template>
  <div>
    <div class="empty-cart" v-show="!checkCart()">
      Whoops! No Items in Cart!
    </div>
    <div class="divide-y divide-gray-400 max-w-4xl m-auto pt-8 pb-8">
      <h3 
        class="text-4xl text-gray-700 p-4 text-center font-thin tracking-widest"
        v-show="checkCart()"
      >
        Your Cart
      </h3>
      <div
        v-for="item in Object.entries(getCart)"
        v-bind:key="item.id"
      >
        <CartItem v-bind:item="item"></CartItem>
      </div>
      <div 
        class="text-gray-700 pt-4 text-4xl tracking-wider font-thin text-center"
        v-show="checkCart()"
      >
        Grand Total: {{ calcTotal() }}
      </div>
    </div>
    <div class="max-w-sm m-auto text-center pb-10">
      <button
        @click.prevent="checkOut"
        v-show="checkCart()"
        class="inline-block flex-shrink-0 border-transparent border-4 bg-teal-500 hover:bg-teal-800 text-sm py-1 px-8 rounded text-white"
      >
        Checkout
      </button>
      <button
        @click.prevent="removeCart"
        v-show="checkCart()"
        class="inline-block flex-shrink-0 border-transparent border-4 bg-red-400 hover:bg-red-800 text-sm py-1 px-2 rounded text-white"
      >
        Remove All Items
    </button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CartItem from '@/components/CartItem.vue'
import { REMOVE_CART } from '@/store/actions.type'

export default {
  name: 'Cart',
  components: {
    CartItem
  },
  methods: {
    removeCart () {
      this.$store
        .dispatch(REMOVE_CART)
    },
    checkCart () {
      return Object.keys(this.getCart).length !== 0
    },
    checkOut () {
      if (this.signedIn) {
        this.$router.replace('/cart/checkout')
      } else {
        this.$router.replace('/cart/login')
      }
    },
    calcTotal () {
      const items = Object.entries(this.getCart)
      const total = items.reduce((acc, item) => {
        const price = item[1].price / 100
        const multiplier = item[1].amount
        return acc += (price * multiplier)
      }, 0)
      return `$ ${total.toFixed(2)}`
    }
    
  },
  computed: {
    ...mapGetters(['getCart', 'signedIn'])
  }
}
</script>

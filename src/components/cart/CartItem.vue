<template>
  <div class="grid grid-cols-2 py-8 relative pl-8 tracking-widest text-gray-700">
    <div>
      {{ item[0] }}
    </div>
    <div class="right-0 absolute py-6 pr-8 tracking-widest text-gray-700">
      <h3 class="inline-block px-4">Quantity: {{ item[1].amount}}</h3>
      <h3 class="inline-block px-4">Subtotal: {{ calcSubtotal() }}</h3>
      <button
        @click.prevent="removeFromCart"
        class="inline-block flex-shrink-0 border-transparent border-4 bg-red-400 hover:bg-red-800 text-sm py-1 px-2 rounded text-white"
      >
        Remove
      </button>
    </div>
  </div>
</template>
<script>
import { REMOVE_ITEM } from '@/store/actions.type'

export default {
  name: 'CartItem',
  props: {
    item: Array
  },
  methods: {
    removeFromCart () {
      this.$store
        .dispatch(REMOVE_ITEM, this.item)
    },
    calcSubtotal () {
      const price = this.item[1].price / 100
      const multiplier = this.item[1].amount
      const subtotal = price * multiplier
      return `$ ${subtotal.toFixed(2)}`
    }
  }
  
}
</script>

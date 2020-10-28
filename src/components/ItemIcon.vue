<template>
  <div class="grid grid-cols-3 p-8 px-12 justify-items-start border rounded shadow">
    <div class="flex justify-center items-center">
      <img class="object-cover h-12 w-20 inline-block px-4" :src='item.attributes.image'>
      <div class="flex justify-center items-center">
        <h3 class="text-xl font-thin">
          {{ item.attributes.name }}
        </h3>
      </div>
    </div>
    <div class="flex justify-center items-center justify-self-center">
      <h3 class="text-xl font-thin">
        {{ convertPrice() }}
      </h3>
    </div>
    <div class="flex justify-center items-center justify-self-end px-4">
      <div class="block">
        <h3 class="text-xl font-thin">
            Qty: {{ getQuantity() }}
        </h3>
      </div>
      <div class="block">
         <h3 class="px-4 text-xl font-thin">
            {{ getSubtotal() }}
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ItemIcon',
  props: {
    item: Object
  },
  methods: {
    convertPrice () {
      const price = this.item.attributes.price / 100
      return `$ ${price.toFixed(2)}`
    },
    getQuantity () {
      const id = this.item.id
      const quantity = this.orderItems.data.find( orderItem => 
        orderItem.relationships.item.data.id == id
      )
      return quantity.attributes.quantity
    },
    getSubtotal () {
      const price = this.item.attributes.price
      const quantity = this.getQuantity()
      const total = (price * quantity) / 100
      return `$ ${total.toFixed(2)}`
    }
  },
  computed: {
    ...mapGetters(['orderItems'])
  }
}
</script>
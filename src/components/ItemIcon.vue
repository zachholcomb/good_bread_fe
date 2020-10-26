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
      <h3 class="text-xl font-thin">
        Quantity:
      </h3>
      <h3 class="block">
        Subtotal:
      </h3>
    </div>
  </div>
</template>
<script>
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
    
  }
}
</script>
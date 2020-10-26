<template>
  <div class="text-gray-700 max-w-4xl m-auto pt-8">
    <h3 class="text-4xl font-thin text-center pt-8 px-8 tracking-wider">
      Order # {{ order.id }}
    </h3> 
    <div class="text-2xl pt-2 pb-6 px-20 text-center">
      <h3 class="font-thin">
        Status:
      </h3>
      <h3 class="text-green-600 justify-self-center font-thin inline-block">
        {{ order.attributes.status }}
      </h3>
    </div>
    <div class="px-12 grid grid-cols-3 max-w-4xl m-auto justify-items-center">
      <h3 class="text-gray-700 tracking-wider font-thin text-lg">Item</h3>
      <h3 class="text-gray-700 tracking-wider font-thin text-lg">Price</h3>
      <h3 class="text-gray-700 tracking-wider font-thin text-lg">Amount</h3>
    </div>
    <div v-for="item in orderItems" v-bind:key="item.id">
      <div class="max-w-4xl">
        <div class="pb-2">
          <ItemIcon v-bind:item="item"></ItemIcon>
        </div>
      </div>
    </div>
    <div class="pb-20">
      <h3 class="text-4xl text-gray-700 font-thin text-center pt-8 px-8 tracking-wider">
        Total: 
      </h3> 
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { FETCH_ITEMS } from '@/store/actions.type'
import store from '@/store'
import ItemIcon from '@/components/ItemIcon.vue'

export default {
  name: 'Order',
  props: {
    order: {
      type: Object
    }
  },
  created () {
    this.$store.dispatch(FETCH_ITEMS, this.order.id)
  },
  computed: {
    ...mapGetters(['orderItems'])
  },
  components: {
    ItemIcon
  }
}
</script>
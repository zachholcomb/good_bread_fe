<template>
  <div class="border border-gray-200 shadow rounded bg-white p-4">
    <UpdateModal v-model='modalOpen'>
      <h3 class="text-2xl text-gray-700 text-center pb-2">{{ item.attributes.name }}</h3>
      <img class="object-cover h-64 w-full" :src='item.attributes.image'>
      <div class="text-gray-700">
        <p>{{ item.attributes.description }}</p>
      </div>
      <div class="p-2 text-gray-700">
        {{ convertPrice() }}
      </div>
      <div class="grid grid-cols-2 gap-6">
        <vSelect
          v-model="selected"
          class="v-select"
          placeholder="Select One"
          :options="['1', 'Half Dozen', 'Bakers Dozen']"
        >
        </vSelect>
        <button
            type="submit"
            @click.prevent="addToCart"
            class="flex-shrink-0 border-transparent border-4 bg-green-500 hover:bg-green-800 text-sm py-1 px-20 rounded text-white"
          >
          Add to Cart
        </button>
      </div>
      <div v-show="selected" class="p-2 text-2xl text-green-800 tracking-wider">
        Subtotal: {{ calcSubtotal() }}
      </div>
    </UpdateModal>
      <img class="object-cover h-64 w-full cursor-pointer" @click='openModal' :src='item.attributes.image'>
    <div class="text-xl tracking-widest text-center text-gray-700">
      <a href class="no-underline hover:underline" @click.prevent="openModal">{{ item.attributes.name }}</a>
    </div>
  </div>
</template>
<script>
import vSelect from 'vue-select'
import UpdateModal from '@/components/utilities/UpdateModal.vue'
import { ADD_CART } from '@/store/actions.type'

export default {
  name: 'ItemTile',
  props: {
    item: Object
  },
  data () {
    return {
      modalOpen: false,
      selected: ''
    }
  },
  methods: {
    openModal () {
      this.modalOpen = true
    },
    addToCart (selected) {
      this.modalOpen = false
      const input = {
        name: this.item.attributes.name,
        id: this.item.id,
        amount: this.selected,
        price: this.item.attributes.price
      }
      this.$store.dispatch(ADD_CART, input)
    },
    convertPrice () {
      const price = this.item.attributes.price / 100
      return `$ ${price.toFixed(2)}`
    },
    calcSubtotal () {
      const price = this.item.attributes.price / 100
      const multiplier = this.convertSelected()
      const total = price * multiplier
      return `$ ${total.toFixed(2)}`
    },
    convertSelected () {
      if (this.selected == '1') {
        return 1
      } else if (this.selected == 'Half Dozen') {
        return 6
      } else if (this.selected == 'Bakers Dozen') {
        return 13
      }
    }
  },
  components: {
    UpdateModal,
    vSelect
  }
}
</script>

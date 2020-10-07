<template>
  <div class="border-double container bg-gray-200 max-w-8xl m-auto">
    <div class="text-center pt-4 text-2xl text-gray-700 uppercase tracking-widest">
      <slot />
    </div>
    <div class="p-8 grid grid-cols-3 gap-4">
      <div v-for="item in items" v-bind:key="item.id">
        <ItemTile v-bind:item="item"></ItemTile>
      </div>
    </div>
  </div>
</template>
<script>
import ItemTile from '@/components/ItemTile.vue'

export default {
  name: 'ItemsContainer',
  props: {
    items: Array
  },
  components: {
    ItemTile
  }
}
</script>

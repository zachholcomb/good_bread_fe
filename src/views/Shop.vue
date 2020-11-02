<template>
  <div class="pb-4 pt-6 wood-bg">
    <TabStore v-model="getItems"></TabStore>
  </div>
</template>
<script>
import TabStore from '@/components/shop/TabStore.vue'
import { GET_ITEMS } from '@/store/actions.type'
import { mapGetters } from 'vuex'

export default {
  name: 'Shop',
  components: {
    TabStore
  },
  created () {
    if (!this.getItems) {
      this.$store
        .dispatch(GET_ITEMS)
    }
  },
  computed: {
    ...mapGetters(['getItems'])
  }
}
</script>

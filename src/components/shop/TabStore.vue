<template>
  <div>
    <div class="max-w-xl m-auto pt-8">
      <div class="flex items-center">
        <button @click='selectTab(1)'
                class="flex-1 bg-gray-200 p-4 px-8 font-light text-gray-700 tracking-widest"
                :class="{ 'bg-green-400 text-white' : currentTab == 1 }"
        >
          Bread
        </button>
        <button @click='selectTab(2)'
                class="flex-1 bg-gray-200 p-4 px-8 font-light text-gray-700 tracking-widest"
                :class="{ 'bg-green-400 text-white' : currentTab == 2 }"
        >
          Pastries
        </button>
        <button @click='selectTab(3)'
                class="flex-1 bg-gray-200 p-4 px-8 font-light text-gray-700 tracking-widest"
                :class="{ 'bg-green-400 text-white' : currentTab == 3 }"
        >
          Donuts
        </button>
        <button @click='selectTab(4)'
                class="flex-1 bg-gray-200 p-4 px-8 font-light text-gray-700 tracking-widest"
                :class="{ 'bg-green-400 text-white' : currentTab == 4 }"
        >
          Bagels
        </button>
        <button @click='selectTab(5)'
                class="flex-1 bg-gray-200 p-4 px-12 font-light text-gray-700 tracking-widest"
                :class="{ 'bg-green-400 text-white' : currentTab == 5 }"
        >
          All
        </button>
      </div>
    </div>
    <div v-if="currentTab == 1" class="pb-8">
      <ItemsContainer v-bind:items='this.getBread'>
        Our Bread
      </ItemsContainer>
    </div>
    <div v-if="currentTab == 2" class="pb-8">
      <ItemsContainer v-bind:items='this.getPastries'>
        Our Pastries
      </ItemsContainer>
    </div>
    <div v-if="currentTab == 3" class="pb-8">
      <ItemsContainer v-bind:items='this.getDonuts'>
        Try Our Donuts
      </ItemsContainer>
    </div>
    <div v-if="currentTab == 4" class="pb-8">
      <ItemsContainer v-bind:items='this.getBagels'>
        BAGELS!
      </ItemsContainer>
    </div>
    <div v-if="currentTab == 5" class="pb-8">
      <ItemsContainer v-bind:items='this.getItems'>
        All Our Offerings
      </ItemsContainer>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ItemsContainer from '@/components/shop/ItemsContainer.vue'

export default {
  name: 'TabStore',
  data () {
    return {
      currentTab: 5
    }
  },
  methods: {
    selectTab (selectedTab) {
      this.currentTab = selectedTab
    }
  },
  computed: {
    ...mapGetters(['getItems', 'getBread', 'getPastries', 'getBagels', 'getDonuts'])
  },
  components: {
    ItemsContainer
  }
}
</script>

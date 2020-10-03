<template>
  <div>
    <div class="max-w-sm m-auto pt-5">
      <div class="flex items-center">
        <button @click='selectTab(1)' 
                class="flex-1 bg-gray-200 p-4 font-bold text-gray-700"
                :class="{ 'bg-teal-500 text-white' : currentTab == 1 }"
        >
          Bread
        </button>
        <button @click='selectTab(2)' 
                class="flex-1 bg-gray-200 p-4 font-bold text-gray-700"
                :class="{ 'bg-teal-500 text-white' : currentTab == 2 }"
        >
          Pastries
        </button>
        <button @click='selectTab(3)' 
                class="flex-1 bg-gray-200 p-4 font-bold text-gray-700"
                :class="{ 'bg-teal-500 text-white' : currentTab == 3 }"
        >
          Donut
        </button>
        <button @click='selectTab(4)' 
                class="flex-1 bg-gray-200 p-4 font-bold text-gray-700"
                :class="{ 'bg-teal-500 text-white' : currentTab == 4 }"
        >
          Bagels
        </button>
      </div>
    </div>
    <div v-if="currentTab ==1">
      <ItemsContainer>
        Our Bread
        {{ getItems }}
      </ItemsContainer>
    </div>
    <div v-if="currentTab ==2">
      <ItemsContainer>
        Our Pastries
      </ItemsContainer>
    </div>
    <div v-if="currentTab ==3">
      <ItemsContainer>
        Try Our Donuts
      </ItemsContainer>
    </div>
    <div v-if="currentTab ==4">
      <ItemsContainer>
        BAGELS!
      </ItemsContainer>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ItemsContainer from '@/components/ItemsContainer.vue'

export default {
  name: "TabStore",
  data () {
    return {
      currentTab: 1,
    }
  },
  methods: {
    selectTab (selectedTab) {
      this.currentTab = selectedTab
    }
  },
  computed: {
    ...mapGetters(['getItems'])
  },
  components: {
    ItemsContainer
  }
}
</script>
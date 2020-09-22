<template>
  <div class="max-w-sm m-auto flex">
    <div class="border p-10 border-gray-200 shadow rounded">
      <h3 class="text-4xl mb-8 text-gray-700">Account Settings</h3>
      <h3 class="text-2xl text-gray-700">{{ getUser.name }}</h3>
      <h3 class="text-xl text-gray-700">{{ getUser.address }}</h3>
      <h3 class="text-xl text-gray-700">{{ getUser.email }}</h3>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  
  name: 'ProfileStats', 
  computed: {
    ...mapGetters(['signedIn', 'getUser'])
  }
}

</script>
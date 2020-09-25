<template>
  <div class="m-auto py-10 bg-dashboard">
    <h3 class=" text-6xl text-gray-700 mb-4 text-center">Welcome Back</h3>
    <div class="grid grid-cols-2 pb-10">
      <ProfileStats></ProfileStats>
      <SubscriptionStats></SubscriptionStats>
    </div>
      <OrderHistory></OrderHistory>
  </div>
</template>
<script>
import ProfileStats from '@/components/ProfileStats.vue'
import OrderHistory from '@/components/OrderHistory.vue'
import SubscriptionStats from '@/components/SubscriptionStats.vue'

export default {
  name: 'UserDashboard',
  components: {
    ProfileStats,
    OrderHistory,
    SubscriptionStats
  }
}
</script>
<style scoped>
  .bg-dashboard {
    @apply bg-green-100
  }
</style>
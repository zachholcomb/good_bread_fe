<template>
  <div class="m-auto py-10">
    <h3 class="font-mono font-regular text-3xl mb-4 text-center">Welcome</h3>
    <div class="grid grid-cols-2">
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

<template>
  <div class="m-auto py-10 bread-bg">
    <h3 class=" text-6xl text-white mb-4 text-center tracking-widest uppercase font-thin">Welcome Back</h3>
    <div class="pb-6">
      <ProfileStats></ProfileStats>
    </div>
    <div class="pb-6">
      <SubscriptionStats></SubscriptionStats>
    </div>
    <div>
      <OrderHistory></OrderHistory>
    </div>
  </div>
</template>
<script>
import ProfileStats from '@/components/dashboard/ProfileStats.vue'
import OrderHistory from '@/components/dashboard/OrderHistory.vue'
import SubscriptionStats from '@/components/dashboard/SubscriptionStats.vue'

export default {
  name: 'UserDashboard',
  components: {
    ProfileStats,
    OrderHistory,
    SubscriptionStats
  }
}
</script>

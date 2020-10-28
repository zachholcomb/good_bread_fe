<template>
  <div>
    <router-link :to="orderLink">
      Order #{{ order.id }} {{ order.attributes.status }} {{ order.attributes.delivery_date }}
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'OrderRow',
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  computed: {
    orderLink () {
      return {
        name: "Order",
        params: {
          slug: this.order.id,
          order: this.order
        }
      }
    }
  }
  
}
</script>
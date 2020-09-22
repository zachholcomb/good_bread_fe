<template>
  <div id="app">
    <NavBar />
    <router-view/>
    <SiteFooter />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    SiteFooter
  }
}
</script>

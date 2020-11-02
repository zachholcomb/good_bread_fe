<template>
  <div id="app">
    <NavBar />
    <router-view/>
    <SiteFooter />
  </div>
</template>

<script>
import NavBar from '@/components/utilities/NavBar.vue'
import SiteFooter from '@/components/utilities/SiteFooter.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    SiteFooter
  }
}
</script>

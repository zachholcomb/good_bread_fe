<template>
  <footer class ='bg-gray-200 pt-2'>
    <div class='divide-y pt-10 divide-gray-400 m-2'>
      <div class='py-8 grid grid-cols-2 flex flex-wrap'>
        <div class='uppercase tracking-widest'>
          <h3 class='px-20 py-2 text-gray-700'>Good Bread Bake Shop</h3>
          <h3 class='px-20 py-2 text-gray-700'>Gabby@goodbreadbakeshop.com</h3>
          <h3 class='px-20 py-2 text-gray-700'>720.985.1595</h3>
        </div>
        <div class='flex justify-end px-20'>
          <EmailForm></EmailForm>
        </div>
      </div>
      <div class='px-20 py-10 text-gray-700 text-center'>
        <h3>Instagram link</h3>
      </div>
    </div>
  </footer>
</template>
<script>
import EmailForm from './EmailForm.vue'
export default {
  name: 'SiteFooter',
  components: {
    EmailForm
  }
}
</script>

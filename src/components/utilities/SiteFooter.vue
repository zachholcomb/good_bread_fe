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
        <a href="https://www.instagram.com/goodbreaddenver/?hl=en" class="relative">
          <svg class="flex-1 w-8 h-8 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="m512 138.597656v234.804688c0 76.421875-62.175781 138.597656-138.597656 138.597656h-234.804688c-76.421875 0-138.597656-62.175781-138.597656-138.597656v-234.804688c0-76.421875 62.175781-138.597656 138.597656-138.597656h234.804688c76.421875 0 138.597656 62.175781 138.597656 138.597656zm0 0" fill="#ff5e95"/>
            <path d="m512 138.597656v234.804688c0 76.421875-62.175781 138.597656-138.597656 138.597656h-117.261719v-512h117.261719c76.421875 0 138.597656 62.175781 138.597656 138.597656zm0 0" fill="#ff3980"/>
            <path d="m256 116.003906c-77.191406 0-139.996094 62.804688-139.996094 139.996094s62.804688 139.996094 139.996094 139.996094 139.996094-62.804688 139.996094-139.996094-62.804688-139.996094-139.996094-139.996094zm0 249.976563c-60.644531 0-109.980469-49.335938-109.980469-109.980469s49.335938-109.980469 109.980469-109.980469 109.980469 49.335938 109.980469 109.980469-49.335938 109.980469-109.980469 109.980469zm0 0" fill="#fff"/>
            <g fill="#96fff6">
              <path d="m399.34375 66.285156c-22.808594 0-41.367188 18.554688-41.367188 41.367188s18.558594 41.371094 41.367188 41.371094c22.8125 0 41.371094-18.558594 41.371094-41.371094s-18.558594-41.367188-41.371094-41.367188zm0 0"/>
              <path d="m395.996094 256c0 77.191406-62.804688 139.996094-139.996094 139.996094v-30.015625c60.644531 0 109.980469-49.335938 109.980469-109.980469s-49.335938-109.980469-109.980469-109.980469v-30.015625c77.191406 0 139.996094 62.804688 139.996094 139.996094zm0 0"/>
            </g>
          </svg>
        </a>
        <div class="text-xs text-gray-500 font-thin">
          Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
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

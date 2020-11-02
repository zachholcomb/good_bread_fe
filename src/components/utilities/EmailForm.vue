<template>
  <div class="text-gray-700 w-full">
    <form class="flex items-center border-b border-teal-500 py-2" @submit.prevent="newsLetter">
      <input type="email" v-model="newsLetter" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="newsletter" placeholder="Subscribe to newsletter">
      <button type="submit" class="flex-shrink-0 border-transparent border-4 bg-teal-500 hover:bg-teal-800 text-sm py-1 px-2 rounded text-white">Subscribe</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'EmailForm'
}
</script>

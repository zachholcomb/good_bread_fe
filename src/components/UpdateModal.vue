<template>
  <Transition name='fade'>
    <div 
      class="fixed pin inset-0 w-full flex items-center justify-center bg-gray-700 bg-opacity-25" 
      v-show="value"
      @click.self="close"
    >
      <div class="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 text-center relative">
        <slot />
        <button @click.prevent="close" class="mt-3 border-b border-teal font-semibold">Cancel</button>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  name: "UpdateModal",
  props: {
    value: {
      required: true
    }
  },
  methods: {
    close () {
      this.$emit("input", !this.value)
    }
  }
}
</script>
<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.4s;
  }
  .fade-enter
  .fade-leave-to {
    opacity: 0;
  }
</style>
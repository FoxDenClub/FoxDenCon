<script setup lang="ts">
import Socials from './Socials.vue'
</script>

<template>
  <header
    class="flex flex-row flex-wrap items-center justify-between h-32 px-2 bg-primary-900 text-primary-50"
    id="header"
  >
    <section class="w-96 max-sm:mx-auto">
      <h1>Fox Den Con</h1>
    </section>
    <section class="uppercase ml-auto con-info">
      <h2>February 19th - 21st, 2027</h2>
      <h4>DoubleTree Denver Hotel</h4>
    </section>
  </header>
  <section class="bg-primary-900 text-primary-50 ml-auto text-right h-8"><Socials /></section>
</template>

<style scoped>
#header {
  /*background-image: ;*/
}
.con-info {
  line-height: 1.25rem;
}
</style>

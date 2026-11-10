<script setup lang="ts">
import Socials from './Socials.vue'
</script>

<template>
  <div id="mainHeader">
    <header
      class="flex flex-row flex-wrap items-center justify-between w-full z-50 h-32 px-2 text-primary-950"
      id="header"
    >
      <section class="w-96 max-sm:mx-auto">
        <h1 class="mb-0">Fox Den Con</h1>
        <div class="ml-4 text-xs text-left">
          <p class="text-center m-0">Join the Cult of the Fox!<br /><em>* NOT A REAL CULT *</em></p>
        </div>
      </section>

      <section class="uppercase ml-auto con-info">
        <h2>February 19th - 21st, 2027</h2>
        <h4>DoubleTree Denver Hotel</h4>
      </section>
    </header>
    <section class="text-primary-500 ml-auto text-right h-8"><Socials /></section>
  </div>
</template>

<style scoped>
#mainHeader {
  background: url('/banner.png') center 0 no-repeat;
}
h1 {
  margin-bottom: 0;
}
h2 {
  margin-top: 0;
}
h3 {
  margin-bottom: 0;
}

p {
  margin: 0;
}
.con-info {
  line-height: 1.25rem;
}
</style>

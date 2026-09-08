<script setup lang="ts">
import NavHeader from './components/NavHeader.vue'
import Header from './components/Header.vue'
</script>

<template>
  <nav class="fixed w-full z-50">
    <Header />
    <NavHeader />
  </nav>
  <div class="mt-64 min-xl:mx-48 min-2xl:mx-72">
    <div class="ml-4">
      <h4>* NOT A REAL CULT *</h4>
      <h4 class="mt-4">Join the Cult of the Fox!</h4>
    </div>
    <RouterView />
  </div>
  <!--  <NavFooter />-->
</template>

<style>
#app {
  padding: 0;
}
</style>

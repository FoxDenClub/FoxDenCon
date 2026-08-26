<script setup lang="ts">
import NavHeader from './components/NavHeader.vue'
import Header from './components/Header.vue'
</script>

<template>
  <nav class="fixed w-full z-50">
    <Header />
    <NavHeader />
  </nav>
  <div class="mt-56 min-xl:mx-48">
    <div class="ml-4">
      <p><h2>* NOT A REAL CULT *</h2></p>
      <p><h2>Join the Cult of the Fox!</h2></p>
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

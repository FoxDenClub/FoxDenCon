<script setup lang="ts">
import NavHeader from './components/NavHeader.vue'
import Header from './components/Header.vue'
</script>

<template>
  <nav class="fixed w-full z-50">
    <Header />
    <NavHeader />
  </nav>
  <main class="mt-64 min-xl:mx-48 min-2xl:mx-72">
    <div class="ml-4">
      <h2>* NOT A REAL CULT *</h2>
      <h2 class="mt-4">Join the Cult of the Fox!</h2>
    </div>
    <RouterView />
  </main>
  <!--  <NavFooter />-->
</template>

<style>
#app {
  padding: 0;
}
</style>

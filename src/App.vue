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
    <RouterView />
  </div>
  <!--  <NavFooter />-->
</template>

<style>
#app {
  padding: 0;
}
</style>

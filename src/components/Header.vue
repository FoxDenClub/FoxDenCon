<script setup lang="ts"></script>

<template>
  <header
    class="flex flex-row items-center justify-between h-32 px-2 bg-primary-900 text-primary-50"
    id="header"
  >
    <section><h1>Name of Con</h1></section>
    <section class="uppercase con-info">
      <h2>Dates</h2>
      <h3>Venue</h3>
    </section>
  </header>
</template>

<style scoped>
#header {
  /*background-image: ;*/
}
.con-info {
  line-height: 1.25rem;
}
</style>

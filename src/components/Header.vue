<script setup lang="ts"></script>

<template>
  <header
    class="flex flex-row items-center justify-between h-32 px-2 bg-primary-900 text-primary-50"
    id="header"
  >
    <section><h1>Fox Den Con</h1></section>
    <section class="uppercase con-info">
      <h2>February 19-21, 2027</h2>
      <h3>DoubleTree Denver Hotel</h3>
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

.date {
  font-family: 'Lemon Milk Medium', sans-serif;
}

.venue {
  font-family: 'Lemon Milk Light';
}
</style>

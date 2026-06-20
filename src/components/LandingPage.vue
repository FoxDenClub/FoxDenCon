<script setup lang="ts">
import Card from 'primevue/card'
import Image from 'primevue/image'
</script>

<template>
  <h1 class="mb-8">Coming Soon</h1>
  <Card>
    <template #title></template>
    <template #content>
      <Image src="/under-construction.jpg" />
    </template>
  </Card>
</template>

<style scoped></style>

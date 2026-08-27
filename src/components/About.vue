<script setup lang="ts">
import Card from 'primevue/card'
import SageMaggie from './sages/SageMaggie.vue'
import SageCerwise from './sages/SageCerwise.vue'
import SageKindra from './sages/SageKindra.vue'
import SageTaylAndPixy from './sages/SageTaylAndPixy.vue'
</script>

<template>
  <Card>
    <template #title>About</template>
    <template #content>
      <h3>*STILL NOT A REAL CULT*</h3>
      <SageMaggie />
      <hr />
      <h2 class="text-center mt-8 mb-4">Who’s your favorite of the 3 sages?</h2>
      <SageCerwise />
      <SageKindra />
      <SageTaylAndPixy />
    </template>
  </Card>
</template>

<style scoped></style>

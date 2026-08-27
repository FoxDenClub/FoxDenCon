<script setup lang="ts">
import Card from 'primevue/card'
</script>

<template>
  <Card>
    <template #title>TRAVEL & VENUE</template>
    <template #content>
      <img src="/photo-hotel.jpeg" class="mx-auto" />
      <p>Fox Den Con will be held in the beautiful DoubleTree Hotel in Denver, Colorado! The address is:</p>
      <p>3203 Quebec St<br />Denver, CO 80207</p>
      <img src="/photo-map.jpeg" class="mx-auto" />
      <p>
        Located just south of i70 on Quebec St, it’s in a great location to drive to from the highway or fly in from out
        of state! Wanna know the best part? We’ve got a hotel block of only $119 a night! Having a room gives you a
        great place to nap, change in and out of fursuit, and lets you stay up later without having to drive afterward!
      </p>
      <p>
        Wanna get into the Con Block? Simply <a href="https://reg.foxdenclub.org/">register for the convention</a> to
        get the link to the hotel! Spaces are limited, so enlist now!
      </p>
    </template>
  </Card>
</template>

<style scoped></style>

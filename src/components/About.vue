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
      <hr class="my-16" />
      <h2>About the Club</h2>
      <p>
        Fox Den Con is organized and run by Fox Den Club. We are a non-profit corporation under IRS code 501(c)(7),
        which means any money we get goes right back to all of you!
      </p>
      <h2>Our Mission</h2>
      <p>
        Fox Den Club exists for the sole purpose of enriching the lives of its members and the furry community as a
        whole. This will be achieved, at a minimum, by hosting an annual event for its members, a convention in which
        they will all be welcomed with open arms and rewarded for their generosity: Fox Den Con. We, the board, the
        chairs, the directors, the staff, the volunteers, will all work with the singular goal of providing the members
        of the club with the best event we possibly can. This will be achieved by providing them with a welcoming staff,
        a venue in which to express themselves, a plethora of options for souvenirs, and experiences they won’t soon
        forget. We will strive to do everything in our power to ensure our members not only want to return the next year
        but want to bring everyone they know as well. Fox Den Club serves primarily its members, but also the furry
        community as a whole. We do this because the community has helped thousands of people in their time of need, and
        it’s our turn to give back to the community. We will do so by providing the world at large with a positive view
        of what furries are like, through exceptional charity, kindness, and a flare for the theatrical.
      </p>
    </template>
  </Card>
</template>

<style scoped></style>

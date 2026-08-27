<script setup lang="ts">
import Card from 'primevue/card'
</script>

<template>
  <Card>
    <template #title>Contribute</template>
    <template #content>
      <h4 class="text-center">== Please note these applications are not quite yet available, check back soon! ==</h4>
      <p>
        Ready to help make the best darn event possible! We can only do it because of amazing volunteers putting their
        best work into it! In fact, every single staff member is a volunteer, from the people checking badges to The
        Great Whiskersnoot, we all do this to make it fun for everyone! If you’re ready to apply, here are the
        categories for which we need volunteers!
      </p>
      <div class="grid grid-flow-row grid-cols-5 gap-4 gap-y-8 justify-around mt-16">
        <div class="row-span-1 col-span-1"><img src="/icon-dj.png" /></div>
        <div class="row-span-1 col-span-4">
          <h4>DJs and Musicians</h4>
          <p>
            Can you spin music? Perhaps you can make it with instruments or with your voice? Apply to help entertain
            people at the nightly dances!
          </p>
        </div>
        <div class="row-span-1 col-span-1"><img src="/icon-artists.png" /></div>
        <div class="row-span-1 col-span-4">
          <h4>Artists</h4>
          <p>
            It takes a lot of art to make a good convention truly feel like home and we have a strict no gen-AI policy,
            so help us make it a beautiful event while keeping everything furry-made!
          </p>
        </div>
        <div class="row-span-1 col-span-1"><img src="/icon-panels.png" /></div>
        <div class="row-span-1 col-span-4">
          <h4>Panelists and Events</h4>
          <p>
            Wanna help fill out the schedule with fun things to do? This is the category for you! Whether you’ve got a
            fun event in mind or a panel you’d like to run, we’d love to have you!
          </p>
        </div>
        <div class="row-span-1 col-span-1"><img src="/icon-dancers.png" /></div>
        <div class="row-span-1 col-span-4">
          <h4>Dancers</h4>
          <p>
            Wanna strut your stuff and show off your skills? Apply to enter the Fursuit Dance Competition or the
            Head-to-Head Dance-off!
          </p>
        </div>
        <div class="row-span-1 col-span-1"><img src="/icon-dealers.png" /></div>
        <div class="row-span-1 col-span-4">
          <h4>Dealers</h4>
          <p>Looking to sell some Merch or perhaps draw some art in the Artist Alley? This is the place to do it!</p>
        </div>
        <div class="row-span-1 col-span-1"><img src="/icon-staff.png" /></div>
        <div class="row-span-1 col-span-4">
          <h4>General Staff</h4>
          <p>
            We need all kinds of general staff! Checking badges, running supplies, all the fun stuff that makes cons
            work!
          </p>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>

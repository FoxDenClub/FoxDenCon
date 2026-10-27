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
            Can you spin Music? Let's get people dancing!
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSduDRq8Qh4PYxTPa7PBGiuxwFtaUBiluMj_v9fuReWV8yJeaw/viewform"
              target="_blank"
              >Apply to get spinning at the nightly dances!</a
            >
          </p>
          <p>
            Are you a musician looking to perform in a concert or perhaps live during one of our nightly dances?
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdk5Y-dmU7aW7Tisos5kzJKzhAd_3MQAqBrPvQAKQOenjWNbg/viewform?usp=dialog"
              target="_blank"
              >Apply to play at the con!
            </a>
          </p>
        </div>

        <div class="row-span-1 col-span-1"><img src="/icon-artists.png" /></div>
        <div class="row-span-1 col-span-4">
          <h4>Con Book Submissions</h4>
          <p>
            The Con Book will feature artwork of all kinds from attendees like you! Do you enjoy writing? Drawing?
            Photography? Crafting? Submit things you'd like to show off here!
          </p>
        </div>
        <div class="row-span-1 col-span-1"><img src="/icon-panels.png" /></div>
        <div class="row-span-1 col-span-4">
          <h4>Panelists and Events</h4>
          <p>
            Wanna help fill out the schedule with fun things to do? This is the category for you! Whether you’ve got a
            fun event in mind or a panel you’d like to run, we’d love to have you!
          </p>
          <p><a href="https://forms.gle/aky4mMTgLAThxhDF7" target="_blank">Apply here!</a></p>
        </div>
        <div class="row-span-1 col-span-1"><img src="/icon-dancers.png" /></div>
        <div class="row-span-1 col-span-4">
          <h4>Dancers</h4>
          <p>
            Wanna strut your stuff and show off your skills?
            <a href="https://forms.gle/eYuC2yrpH2thnKNq8" target="_blank"
              >Apply to enter the Fursuit Dance Competition</a
            >
            or the Head-to-Head Dance-off!
          </p>
          <p>
            <a
              href="https://docs.google.com/document/d/10civtbzQjK3f3Ffe9MslfmUccc422rrPHWxa3X3GdHM/edit?usp=sharing"
              target="_blank"
            >
              Rules and Criteria
            </a>
          </p>
        </div>
        <div class="row-span-1 col-span-1"><img src="/icon-dealers.png" /></div>
        <div class="row-span-1 col-span-4">
          <h4>Dealers</h4>
          <p>Looking to sell some Merch or perhaps draw some art in the Artist Alley? This is the place to do it!</p>
          <p><RouterLink to="/vending-policies">Vending Policies</RouterLink></p>
          <p>
            To apply to sell at Fox Den Con, go to
            <a href="https://reg.foxdenclub.org/" target="_blank">reg.foxdenclub.org</a>, create an account, and apply
            in the "dealer" section.
          </p>
        </div>
        <div class="row-span-1 col-span-1"><img src="/icon-staff.png" /></div>
        <div class="row-span-1 col-span-4">
          <h4>Volunteers, Staff, and Artists</h4>
          <p>
            We need all kinds of general staff! Checking badges, running supplies, all the fun stuff that makes cons
            work! We also need artists! It takes a lot of art to make a good convention truly feel like home and we have
            a strict no gen-AI policy, so help us make it a beautiful event while keeping everything furry-made!
          </p>
          <p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdKdaGtKk8ocuQADmLT0Nn-yz_GjeKt2SreJ0sZfmdk--OApQ/viewform?usp=publish-editor"
              target="_blank"
              >Apply here!</a
            >
          </p>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>

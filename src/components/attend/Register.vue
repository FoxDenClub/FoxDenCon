<script setup lang="ts">
import Card from 'primevue/card'
</script>

<template>
  <Card>
    <template #title><h1>Register</h1></template>
    <template #content>
      <p>Attendance is limited, so join now!</p>
      <p>Ready to be indoctrinated? <a href="https://reg.foxdenclub.org/">Register here!</a></p>
      <p>
        Want to be a member of the best cult to roam the earth? Join the Cult of the Fox! With your help we can summon
        The Great Vixen, Maggie, who will usher in the next Golden Age of Furries! But we can’t do it alone, we need
        your help. Our leadership is split between the three sages: Cerwise, the deer, Kindra, the bunny, and Tayl &
        Pixy, the twin raccoons. This is where you come in. You can support your favorite sage and feed them energy from
        having fun at the convention!
      </p>

      <div class="flex flex-3 max-md:flex-wrap mt-8">
        <Card class="max-w-lg max-md:mx-auto">
          <template #header>
            <p class="max-md:text-xl">Initiate</p>
            <h5>$99.99</h5>
          </template>
          <template #title><img src="/icon-attending.webp" alt="Initiate Tier Icon" class="h-72 mx-auto" /></template>
          <template #content>
            <p>As an initiate of the Cult of the Fox you receive:</p>
            <ul class="list-disc">
              <li>Entry to the Con Hotel at a discounted price of $120 a night! (until con block is full)</li>
              <li>Access to all events!</li>
              <li>Access to fursuit lounges and social areas</li>
              <li>Con badge, yours to keep after the con! (see terms)</li>
              <li>Reusable tote for your carrying needs</li>
              <li>Convention lanyard</li>
              <li>Convention pin</li>
              <li>Digital Con Book</li>
            </ul>
          </template>
        </Card>

        <Card class="max-w-lg max-md:mx-auto">
          <template #header
            ><p class="max-md:text-xl">Adept</p>
            <h5>$199.99</h5></template
          >
          <template #title><img src="/icon-sponsor.webp" alt="Adept Tier Icon" class="h-72 mx-auto" /></template>
          <template #content>
            <p>As an Adept in the Cult of the Fox you will receive:</p>
            <ul class="list-disc">
              <li>Everything one would get as an Initiate</li>
              <li>Priority seating for Main Events (second only to the Elders)</li>
              <li>Early entry to the Dealer's Area</li>
              <li>A pin of your chosen Sage</li>
              <li>The con shirt in your size! (please tell us your size!)</li>
              <li>A reusable sticker book to share and trade stickers with other attendees</li>
              <li>3D Printed Holy Symbol of your chosen Sage</li>
              <li>Access to the Snack Sanctum (which will have snacks and drinks from 11 am to 5 pm)</li>
            </ul>
          </template>
        </Card>

        <Card class="max-w-lg max-md:mx-auto">
          <template #header
            ><p class="max-md:text-xl">Elder</p>
            <h5>$399.99</h5></template
          >
          <template #title><img src="/icon-patron.webp" alt="Elder Tier Icon" class="h-72 mx-auto" /></template>
          <template #content>
            <p>As an adept you'll receive:</p>
            <ul class="list-disc">
              <li>All perks of the Initiate tier</li>
              <li>All perks of the Adept tier</li>
              <li>Priority seating for Main Events (second to none!)</li>
              <li>Catered Elder Dinner (with an open bar for those 21+)</li>
              <li>Large enamel pin of Maggie, the Great Vixen</li>
              <li>Pins of the other 2 sages (a full set!)</li>
              <li>Special Elder gift!</li>
            </ul>
          </template>
        </Card>
      </div>
      <p>
        And guess what? If we get close to our attendance limit, we’ll add more perks for every tier! So
        <a href="https://reg.foxdenclub.org/">register now</a>
        and tell your friends!
      </p>
    </template>
  </Card>
</template>

<style scoped></style>

<script setup lang="ts">
import Card from 'primevue/card'
</script>

<template>
  <Card>
    <template #title></template>
    <template #content>
      <!-- TODO Banner goes here?? Or maybe he means the top nav banner -->

      <p>
        For eons the furries have toiled under the thumb of the normies. But on a casual hike through rural Egypt, our
        glorious prophet Whiskersnoot found a holy scroll that told of a special furry who would usher in a golden age
        for furries everywhere. Her name is Maggie, and with your help, we can summon her! The scroll didn’t specify
        what sort of ritual would attract her to our realm, however, and our three Sages disagree on how to attempt it.
        So join us and help us decide how to summon The Great Vixen!
      </p>
      <h2 class="mt-8 text-center">HERE'S WHAT WE NEED FROM YOU!</h2>

      <div class="flex flex-3 max-md:flex-wrap mt-8">
        <Card class="max-w-lg max-md:mx-auto">
          <template #header>
            <RouterLink to="register" class="max-md:text-xl">Register for the Summoning!</RouterLink>
          </template>
          <template #title><img src="/icon-register.png" /></template>
          <template #content>
            <p>
              By registering for the convention you will be eligible to attend! Meet up with friends, make new ones, and
              have tons of fun with the events at the con! The more fun you have, the more energy you will provide for
              your favorite sage to summon The Great Vixen!
            </p>
          </template>
        </Card>

        <Card class="max-w-lg max-md:mx-auto">
          <template #header><RouterLink to="venue" class="max-md:text-xl">Get a Hotel Room!</RouterLink></template>
          <template #title><img src="/icon-travel.png" /></template>
          <template #content>
            <p>
              Getting yourself a hotel room will make it easier for you to participate in events by giving you a great
              place to stage or rest. It also helps us keep the venue happy ‘cause we have to promise a certain number
              of rooms to host a convention.
            </p>
          </template>
        </Card>

        <Card class="max-w-lg max-md:mx-auto">
          <template #header
            ><RouterLink to="contribute" class="max-md:text-xl">Go the Extra Mile!</RouterLink></template
          >
          <template #title><img src="/icon-applications.png" /></template>
          <template #content>
            <p>
              Wanna really help usher in an era of furry prosperity? Join our special-cultist program and help make this
              the best possible experience for your fellow furries! Host a panel, be a DJ, draw art for the convention,
              help run the event, and other important stuff!
            </p>
          </template>
        </Card>
      </div>

      <h3>Meet your Saviors! (click on them to learn more!)</h3>
      <p>
        <!--picture of Maggie -->
        <!-- picture of Sages -->
      </p>
    </template>
  </Card>
</template>

<style scoped></style>

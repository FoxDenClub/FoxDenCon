<script setup lang="ts">
import Menubar from 'primevue/menubar'
import { ref } from 'vue'

const items = ref([
  {
    label: 'Home',
    route: '/',
    icon: 'pi pi-home',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Attend',
    items: [
      { label: 'Register', route: '/register' },
      { label: 'Travel', route: '/travel' },
      { label: 'Venue', route: '/venue' },
      { label: 'Contribute', route: '/contribute' },
      { label: 'Vending', route: '/vending' },
      { label: 'Our Policies', route: '/our-policies' },
    ],
  },
])

const scrollToTop = () => window.scrollTo(0, 0)
</script>

<template>
  <Menubar :model="items" class="min-h-16" id="menubar">
    <template #start>
      <RouterLink to="/" @click.native="scrollToTop">
        <!--        <img src="/logo.png" class="h-8" alt="Home" />-->
      </RouterLink>
    </template>
    <template #item="{ item, props, hasSubmenu }">
      <RouterLink
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a
          v-ripple
          :href="href"
          v-bind="props.action"
          @click="navigate"
          @click.native="scrollToTop"
          class="item"
        >
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
      </RouterLink>
      <a
        v-else
        v-ripple
        :href="item.url"
        :target="item.target"
        v-bind="props.action"
        class="item"
      >
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
      </a>
    </template>
  </Menubar>
</template>

<style scoped></style>

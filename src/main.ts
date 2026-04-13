import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/Aura'
import { definePreset } from '@primeuix/themes'
import About from './components/About.vue'
import OurPolicies from './components/attend/OurPolicies.vue'
import Register from './components/attend/Register.vue'
import Travel from './components/attend/Travel.vue'
import Contribute from './components/attend/Contribute.vue'
import Vending from './components/attend/Vending.vue'
import Venue from './components/attend/Venue.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/about', component: About },
  { path: '/register', component: Register },
  { path: '/travel', component: Travel },
  { path: '/venue', component: Venue },
  { path: '/contribute', component: Contribute },
  { path: '/vending', component: Vending },
  { path: '/our-policies', component: OurPolicies },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const Theme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}',
    },
    colorScheme: {
      light: {},
      dark: {},
    },
  },
})

createApp(App)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Theme,
    },
  })
  .mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
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
      light: {
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
      },
    },
  },
  components: {
    card: {
      colorScheme: {
        light: {
          root: {
            background: '{surface.50}',
            color: '{surface.700}',
          },
          subtitle: {
            color: '{surface.500}',
          },
        },
        dark: {
          root: {
            background: '{surface.900}',
            color: '{surface.50}',
          },
          subtitle: {
            color: '{surface.400}',
          },
        },
      },
    },
    menubar: {
      colorScheme: {
        light: {
          root: {
            background: '{primary.100}',
            borderRadius: '0',
            borderColor: 'transparent',
          },
        },
        dark: {
          root: {
            background: '{primary.900}',
            borderRadius: '0',
            borderColor: 'transparent',
          },
        },
      },
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

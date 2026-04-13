<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import Card from 'primevue/card'

const { name } = defineProps<{ name: string }>()

type Pokemon = {
  name?: string
  weight?: number
  sprites?: {
    [key: string]: string
  }
}

const url = `https://pokeapi.co/api/v2/pokemon/${name}`
const { data: pokemon } = useFetch<Pokemon>(url).get().json()
</script>

<template>
  <Card>
    <template #header>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </template>
    <template #title>{{ pokemon?.name }}</template>
    <template #content>Weight: {{ pokemon?.weight }}</template>
  </Card>
</template>

<style scoped></style>

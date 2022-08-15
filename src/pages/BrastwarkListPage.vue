<template>
  <div :class="$style.root">
    <BrastwarkList :brastlewarks="pokedex?.Brastlewark"/>
  </div>
</template>

<script setup lang="ts">
import { loadPockedex, pokedex } from '../state';
import BrastwarkList from '../components/BrastwarkList.vue';

if (!pokedex)
  loadPockedex();
</script>

<style module>
.root {
  @apply text-2xl;
}
</style>

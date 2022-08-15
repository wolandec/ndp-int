<template>
  <div :class="$style.root">
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import { loadPockedex, pokedex } from './state'

loadPockedex();

defineExpose({
  pockedex: pokedex
})
</script>


<style module>
.root {
  @apply flex justify-center py-10 px-12;
}
</style>

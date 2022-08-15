<template>
  <div :class="$style.root">
    <div :class="$style.card" v-for="(brastlewark, i) in brastlewarks" :key="i">
      <div :class="$style.header" v-text="brastlewark.name"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Brastlewark } from '../types/types';

defineProps<{ brastlewarks: Brastlewark[] }>()
</script>

<style module>
.root {
  @apply text-2xl;
  @apply flex flex-col gap-10
}

.card {
  @apply shadow-blue-100 shadow-lg rounded-md py-4 px-3;
}

.header {

}
</style>

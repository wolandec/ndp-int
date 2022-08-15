<template>
  <div :class="$style.root">
    <div :class="$style.header" v-text="brastlewark.name"></div>
  </div>
</template>

<script setup lang="ts">
import { Brastlewark } from '../types/types';

defineProps<{ brastlewark: Brastlewark }>()
</script>

<style module>
.root {
  @apply text-2xl;
}
</style>

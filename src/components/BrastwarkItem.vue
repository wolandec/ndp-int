<template>
  <div :class="$style.root" @click="$emit('click', brastlewark.id)">
    <div :class="$style.header" v-text="brastlewark.name"></div>
  </div>
</template>

<script setup lang="ts">
import { Brastlewark } from '../types/types';

defineProps<{ brastlewark: Brastlewark }>()

defineEmits<{
  (e: 'click', id: number): void
}>()
</script>

<style module>
.root {
  @apply text-2xl cursor-pointer;
}
</style>

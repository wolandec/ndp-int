<template>
  <div :class="$style.root">
    <BrastwarkItem
        :class="$style.card"
        v-for="(brastlewark, i) in brastlewarksToShow" :key="i"
        :brastlewark="brastlewark"
        @click="handleItemClick">
    </BrastwarkItem>
  </div>
</template>

<script setup lang="ts">
import { Brastlewark } from '../types/types';
import { computed, toRefs } from 'vue';
import BrastwarkItem from './BrastwarkItem.vue';

const props = defineProps<{ brastlewarks: Brastlewark[] }>()
const emit = defineEmits<{
  (e: 'click', id: number): void
}>()

const { brastlewarks } = toRefs(props);

// This is for pagination for example
const brastlewarksToShow = computed(() => (brastlewarks.value))

function handleItemClick (id: number) {
  emit('click', id)
}
</script>

<style module>
.root {
  @apply text-2xl;
  @apply flex flex-col gap-10
}

.card {
  @apply shadow-blue-100 shadow-lg rounded-md py-4 px-3;
}
</style>

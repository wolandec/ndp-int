<template>
  <div :class="$style.root">
    <div :class="$style.back" v-text="Back"/>
    <BrastwarkFullInfo :brastlewark="brastlewark"/>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { pokedex } from '../state';

const { params } = useRoute();

const brastlewark = computed(() => {
  if (!pokedex.value?.Brastlewark)
    return null;

  pokedex.value.Brastlewark.find(brastlewark => brastlewark.id === params.id)
})

</script>

<style module>
.root {
  @apply flex flex-col gap-12 text-2xl;
}

.header {
  @apply flex;
}
</style>

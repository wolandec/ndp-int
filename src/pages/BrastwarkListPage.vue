<template>
  <div :class="$style.root">
    <div :class="$style.filters">
      <label :class="$style.filter_header">
        <select name="professionSearch"
                v-model="selectedProfession"
                id="professionSearch">

          <option value="" v-text="'Select profession'"/>
          <option v-for="profession in allProfessions" v-text="profession"></option>
        </select>
      </label>
    </div>
    <BrastwarkList :brastlewarks="filteredBreastwarks" @click="handleBrastwarkClick"/>
  </div>
</template>

<script setup lang="ts">
import { allProfessions, loadPockedex, pokedex } from '../state';
import BrastwarkList from '../components/BrastwarkList.vue';
import { computed, ref } from 'vue';
import { Profession } from '../types/types';
import { useRouter } from 'vue-router';

const router = useRouter()
const selectedProfession = ref<Profession | null>()

if (!pokedex.value)
  loadPockedex();

const filteredBreastwarks = computed(() => {
  if (!pokedex?.value?.Brastlewark)
    return []

  if (selectedProfession.value)
    return (pokedex.value.Brastlewark).filter((brast) => brast.professions.includes(selectedProfession.value as Profession))

  return pokedex.value.Brastlewark
})

function handleBrastwarkClick (id: number) {
  router.push({ name: 'BrastwarkFullInfo', params: { id } });
}

defineExpose({ pokedex, allProfessions, filteredBreastwarks })
</script>

<style module>
.root {
  @apply flex flex-col gap-12 text-2xl;
}

.header {
  @apply flex;
}
</style>

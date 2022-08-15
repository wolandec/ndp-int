import { Pokedex } from '../types/types';
import { ref } from 'vue';
import { getPokedex } from '../api/Pockedex';

export const pokedex = ref<Pokedex | null>(null);

export async function loadPockedex () {
  if (pokedex.value)
    return;

  const localPokedex = localStorage.getItem('pokedex');

  if (localPokedex) {
    pokedex.value = JSON.parse(localPokedex)
    return;
  }


  pokedex.value = await getPokedex();

  if (pokedex.value)
    localStorage.setItem('pokedex', JSON.stringify(pokedex.value))
}

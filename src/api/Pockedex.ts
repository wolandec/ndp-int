import { Pokedex } from '../types/types';
import { Brastlewark } from './data';

export async function getPokedex (): Promise<Pokedex> {
  return await Promise.resolve(Brastlewark);
}

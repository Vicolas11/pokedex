import { IPokemonData } from "../interfaces/PokemonData.interface";

export const getRandomIndex = (arr: IPokemonData[], foundIndex: number) => {
  const possibleIndices = arr
    .map((_, idx) => idx)
    .filter((i) => i !== foundIndex);
  const randomIndex = Math.floor(Math.random() * possibleIndices.length);
  return possibleIndices[randomIndex];
};

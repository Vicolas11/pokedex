import React from "react";
import styles from "./style.module.scss";
import { PokemonCard } from "../PokemonCard";

interface Pokemon {
  name: string;
  description: string;
  imageUrl: string;
  number: number;
}

interface PokemonListProps {
  pokemonData: Pokemon[];
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokemonData }) => {
  return (
    <div className={styles.pokemonList}>
      {pokemonData.map((pokemon, idx) => (
        <PokemonCard
          key={idx}
          number={pokemon.number}
          name={pokemon.name}
          description={pokemon.description}
          imageUrl={pokemon.imageUrl}
        />
      ))}
    </div>
  );
};

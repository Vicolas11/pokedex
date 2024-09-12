import { PokemonListProps } from "../../interfaces/PokemonListProp.interface";
import { PokemonListCard } from "../PokemonListCard";
import styles from "./style.module.scss";
import React from "react";

export const PokemonList: React.FC<PokemonListProps> = ({ pokemonData }) => {
  return (
    <div className={styles.pokemonList}>
      {pokemonData.map((pokemon, idx) => (
        <PokemonListCard
          key={idx}
          id={pokemon.id}
          number={pokemon.number}
          types={pokemon.types}
          name={pokemon.name}
          classification={pokemon.classification}
          imageUrl={pokemon.image}
        />
      ))}
    </div>
  );
};

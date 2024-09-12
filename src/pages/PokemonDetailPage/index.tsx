import { PokemonDetailCard } from "../../components/PokemonDetailCard";
import { EvolutionPokemon } from "../../components/EvolutionPokemon";
import { useAppSelector } from "../../hooks/store.hook";
import { useSearchParams } from "react-router-dom";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";

export const PokemonDetailPage = () => {
  const searchParams = useSearchParams()[0];
  const pokemonId = searchParams.get("id");
  const { data: pokemonDataArr, searchedData } = useAppSelector(
    (state) => state.pokemonData
  );
  let pokemon =
    pokemonDataArr.find((pkm) => pkm.id === pokemonId) || searchedData;

  return (
    <>
      <Header />
      <div className={styles.container}>
        {!pokemon ? (
          <h1 className={styles.notFoundText}>Sorry! Pokémon not Found!</h1>
        ) : (
          <>
            <PokemonDetailCard
              name={pokemon.name}
              number={pokemon.number}
              imageUrl={pokemon.image}
              weight={pokemon.weight}
              height={pokemon.height}
              types={pokemon.types}
            />
            <EvolutionPokemon />
          </>
        )}
      </div>
    </>
  );
};

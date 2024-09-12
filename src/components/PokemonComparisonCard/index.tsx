import { PokemonComparisonCardProps } from "../../interfaces/PokemonComparisonCard.interface";
import { PokemonDetailInfo } from "../PokemonDetailInfo";
import styles from "./styles.module.scss";
import { FC } from "react";

export const PokemonComparisonCard: FC<PokemonComparisonCardProps> = ({
  pokemon,
}) => {
  return (
    <div className={styles.pokemonComparisonCard}>
      <div className={styles.pokemonComparisonImgContainer}>
        <img
          className={styles.pokemonComparisonImg}
          src={pokemon.image}
          alt="Pokemon Image"
        />
      </div>
      <div className={styles.detailInfo}>
        <PokemonDetailInfo
          pokemonName={pokemon.name}
          pokemonNumber={pokemon.number}
          weight={pokemon.weight}
          height={pokemon.height}
          types={pokemon.types}
          isDetailPage
        />
      </div>
    </div>
  );
};

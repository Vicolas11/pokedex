import { PokemonDetailCardProps } from "../../interfaces/PokemonDetailCard.interface";
import { FC } from "react";
import PokemonDetailInfo from "../PokemonDetailInfo";
import styles from "./styles.module.scss";

export const PokemonDetailCard: FC<PokemonDetailCardProps> = ({
  name,
  number,
  imageUrl,
  weight,
  height,
  types,
}) => {
  return (
    <div className={styles.pokemonDetailCard}>
      <div className={styles.pokemonDetailImgContainer}>
        <img
          className={styles.pokemonDetailImg}
          src={imageUrl}
          alt="Pokemon Image"
        />
      </div>
      <PokemonDetailInfo
        pokemonName={name}
        pokemonNumber={number}
        types={types}
        height={height}
        weight={weight}
        isDetailPage
      />
    </div>
  );
};

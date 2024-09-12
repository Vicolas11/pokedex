import { PokemonComparisonCardProps } from "../../interfaces/PokemonComparisonCard.interface";
import PokemonDetailInfo from "../PokemonDetailInfo";
import { PokemonImg } from "../../assets";
import styles from "./styles.module.scss";

export default function PokemonComparisonCard({
  pokemonName,
  pokemonNumber,
}: PokemonComparisonCardProps) {
  return (
    <div className={styles.pokemonComparisonCard}>
      <div className={styles.pokemonComparisonImgContainer}>
        <img
          className={styles.pokemonComparisonImg}
          src={PokemonImg}
          alt="Pokemon Image"
        />
      </div>
      <div className={styles.detailInfo}>
        <PokemonDetailInfo
          pokemonName={pokemonName}
          pokemonNumber={pokemonNumber}
          isDetailPage
        />
      </div>
    </div>
  );
}

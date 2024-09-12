import { PokemonImg } from "../../assets";
import PokemonDetailInfo from "../PokemonDetailInfo";
import styles from "./styles.module.scss";

export default function PokemanDetailCard() {
  return (
    <div className={styles.pokemonDetailCard}>
      <div className={styles.pokemonDetailImgContainer}>
        <img
          className={styles.pokemonDetailImg}
          src={PokemonImg}
          alt="Pokemon Image"
        />
      </div>
      <PokemonDetailInfo pokemonName="Bulbasaur" pokemonNumber={`001`} />
    </div>
  );
}

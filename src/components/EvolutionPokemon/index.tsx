import { FiArrowRight } from "react-icons/fi";
import { PokemonImg } from "../../assets";
import styles from "./styles.module.scss";

export const EvolutionPokemon = () => {
  return (
    <div className={styles.evolutionContent}>
      <h2>Evolution</h2>
      <div>
        <img
          className={styles.smallImg}
          src={PokemonImg}
          alt="Pokemon Small Image"
        />
        <FiArrowRight />
        <img
          className={styles.smallerImg}
          src={PokemonImg}
          alt="Pokemon Smaller Image"
        />
        <FiArrowRight />
        <img
          className={styles.smallestImg}
          src={PokemonImg}
          alt="Pokemon Smallest Image"
        />
      </div>
    </div>
  );
};

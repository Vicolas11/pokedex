import PokemonDetailCard from "../../components/PokemonDetailCard";
import { Header } from "../../components/Header";
import { FiArrowRight } from "react-icons/fi";
import styles from "./styles.module.scss";
import { PokemonImg } from "../../assets";

export default function PokemonComparisonPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <PokemonDetailCard />
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
      </div>
    </>
  );
}

import PokemonComparisonCard from "../../components/PokemonComparisonCard";
import { Header } from "../../components/Header";
import { CircleVersusImg } from "../../assets";
import styles from "./styles.module.scss";

export default function PokemonComparisonPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <PokemonComparisonCard pokemonName="Bulbasaur" pokemonNumber="001" />
        <PokemonComparisonCard pokemonName="Jugglypuff" pokemonNumber="039" />
        <img
          className={styles.circleVersusImg}
          src={CircleVersusImg}
          alt="Circle Versus Image"
        />
      </div>
    </>
  );
}

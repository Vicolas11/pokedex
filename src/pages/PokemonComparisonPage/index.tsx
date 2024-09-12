import { PokemonComparisonCard } from "../../components/PokemonComparisonCard";
import { NoExistingData } from "../../components/NoExistingData";
import { useSearchParams } from "react-router-dom";
import { getRandomIndex } from "../../utils/randNum.util";
import { useAppSelector } from "../../hooks/store.hook";
import { Header } from "../../components/Header";
import { CircleVersusImg } from "../../assets";
import styles from "./styles.module.scss";

export const PokemonComparisonPage = () => {
  const searchParams = useSearchParams()[0];
  const pokemonId = searchParams.get("id");
  const { data: pokemonData, searchedData } = useAppSelector(
    (state) => state.pokemonData
  );
  const existingData =
    pokemonData.find((data) => data.id === pokemonId) || searchedData;
  if (!existingData) return <NoExistingData />;
  const randomIdx = getRandomIndex(
    pokemonData,
    pokemonData.indexOf(existingData)
  );

  return (
    <>
      <Header />
      <div className={styles.container}>
        <PokemonComparisonCard pokemon={existingData} />
        <PokemonComparisonCard pokemon={pokemonData[randomIdx]} />
        <img
          className={styles.circleVersusImg}
          src={CircleVersusImg}
          alt="Circle Versus Image"
        />
      </div>
    </>
  );
};

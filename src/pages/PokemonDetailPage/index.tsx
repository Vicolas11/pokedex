import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/store.hook";
import { Header } from "../../components/Header";
import { FiArrowRight } from "react-icons/fi";
import styles from "./styles.module.scss";
import { PokemonImg } from "../../assets";
import { PokemonDetailCard } from "../../components/PokemonDetailCard";

export default function PokemonDetailPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");
  const { data: pokemonDataArr } = useAppSelector((state) => state.pokemonData);
  const pokemon = pokemonDataArr.find((pkm) => pkm.id === pokemonId);

  return (
    <>
      <Header />
      <div className={styles.container}>
        {!pokemon ? (
          <h1 className={styles.notFoundText}>Sorry! Pokemon not Found!</h1>
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
          </>
        )}
      </div>
    </>
  );
}

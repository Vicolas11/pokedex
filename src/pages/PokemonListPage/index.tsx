import styles from "./styles.module.scss";
import { GreyCircleBgImg, Logo, PokemonImg } from "../../assets";
import { Header } from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { PokemonList } from "../../components/PokemonList";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hook";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { constants } from "../../config/constants.config";
import { fetchedPokemons } from "../../graphql/query";
import { setHasFetched, setPokemonData } from "../../store/slice/pokemon.slice";
import Loader from "../../components/Loader";

const data = [
  {
    number: 1,
    name: "Bulbasaur",
    description:
      "A stranger seed was planted on its back at birth the plant sprouts and grows with the pokemon",
    imageUrl: PokemonImg,
  },
  {
    number: 1,
    name: "Bulbasaur",
    description:
      "A stranger seed was planted on its back at birth the plant sprouts and grows with the pokemon",
    imageUrl: PokemonImg,
  },
  {
    number: 1,
    name: "Bulbasaur",
    description:
      "A stranger seed was planted on its back at birth the plant sprouts and grows with the pokemon",
    imageUrl: PokemonImg,
  },
  {
    number: 1,
    name: "Bulbasaur",
    description:
      "A stranger seed was planted on its back at birth the plant sprouts and grows with the pokemon",
    imageUrl: PokemonImg,
  },
];

export default function PokemonListPage() {
  const {
    searchTerm,
    hasFetched,
    data: pokemonDataArr,
    filteredData: userFilteredDataArr,
  } = useAppSelector((state) => state.pokemonData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get("page");
  const isSearch = searchParams.get("isSearch");
  const [hasError, setHasError] = useState({ msg: "", status: false });
  const { graphQLAPI } = constants;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleUnload = () => {
      // Page is being unloaded (refresh, close, or navigate away)
      dispatch(setHasFetched(true));
    };

    window.addEventListener("unload", handleUnload);

    return () => {
      window.removeEventListener("unload", handleUnload);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(graphQLAPI, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: fetchedPokemons,
            variables: { first: 9 },
          }),
        });

        if (!response.ok) {
          setHasError({
            status: true,
            msg: response.statusText || "An error occurred!",
          });

          setIsLoading(false);
          return;
        }

        const result = await response.json();

        dispatch(setPokemonData(result.data.pokemons));

        setIsLoading(false);
      } catch (error: any) {
        setHasError({
          status: true,
          msg: error.message || "An error occurred!",
        });

        setIsLoading(false);
      }
    };

    hasFetched && fetchData();
  }, [hasFetched]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <img className={styles.logo} src={Logo} alt="Pokemon Logo" />
        {isLoading ? (
          <Loader />
        ) : hasError.status ? (
          <h2 className={styles.hasErrorText}>{hasError.msg}</h2>
        ) : pokemonDataArr.length === 0 ? (
          <h2 className={styles.notFoundText}>No Record Found!</h2>
        ) : (
          <>
            <SearchBar />
            <PokemonList pokemonData={pokemonDataArr} />
          </>
        )}
      </div>
    </>
  );
}

import { fetchSinglePokemon, fetchedPokemons } from "../../graphql/query";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hook";
import { constants } from "../../config/constants.config";
import { PokemonList } from "../../components/PokemonList";
import { SearchBar } from "../../components/SearchBar";
import { Loader } from "../../components/Loader";
import { Header } from "../../components/Header";
import { BsArrowLeft } from "react-icons/bs";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Logo } from "../../assets";
import {
  setHasFetched,
  setPokemonData,
  setPokemonSearchData,
} from "../../store/slice/pokemon.slice";

export const PokemonListPage = () => {
  const {
    searchTerm,
    hasFetched,
    data: pokemonDataArr,
    searchedData,
  } = useAppSelector((state) => state.pokemonData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState(false);
  const [hasError, setHasError] = useState({ msg: "", status: false });
  const { graphQLAPI } = constants;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleUnload = () => {
      // Page is being unloaded (refresh, close, or navigate away)
      dispatch(setHasFetched(true));
    };

    window.addEventListener("unload", handleUnload);

    return () => {
      window.removeEventListener("unload", handleUnload);
    };
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(graphQLAPI, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: isSearch ? fetchSinglePokemon : fetchedPokemons,
            variables: isSearch ? { name: searchTerm } : { first: 20 },
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

        dispatch(
          isSearch
            ? setPokemonSearchData(result.data.pokemon)
            : setPokemonData(result.data.pokemons)
        );

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
  }, [isSearch, hasFetched]);

  const onClickArrowBack = () => {
    setIsSearch(false);
    dispatch(setPokemonSearchData(null));
  };

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
            <SearchBar setIsSearch={setIsSearch} />
            {isSearch && (
              <div className={styles.searchResult}>
                <span onClick={onClickArrowBack}>
                  <BsArrowLeft size={20} />
                </span>
                <h3>
                  {searchedData ? (
                    <>
                      Search Result -{" "}
                      <span className={styles.result}>
                        <b>{searchTerm}</b>
                      </span>
                    </>
                  ) : (
                    <>
                      Sorry no Pokémon name for -{" "}
                      <span className={styles.result}>
                        <b>{searchTerm}</b>
                      </span>
                    </>
                  )}
                </h3>
              </div>
            )}
            <PokemonList
              pokemonData={
                isSearch && searchedData ? [searchedData] : pokemonDataArr
              }
            />
          </>
        )}
      </div>
    </>
  );
};

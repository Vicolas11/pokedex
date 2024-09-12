import styles from "./styles.module.scss";
import { GreyCircleBgImg, Logo, PokemonImg } from "../../assets";
import { Header } from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { PokemonList } from "../../components/PokemonList";

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

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <img className={styles.logo} src={Logo} alt="Pokemon Logo" />
        <SearchBar />
        <PokemonList pokemonData={data} />
      </div>
    </>
  );
}

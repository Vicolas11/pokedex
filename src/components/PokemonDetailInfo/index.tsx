import { PokemonDetailInfoProps } from "../../interfaces/PokemonDetailInfo.interface";
import { IoVolumeHighOutline } from "react-icons/io5";
import { statsData } from "../../data/local.data";
import styles from "./styles.module.scss";
import { CardButton } from "../CardButton";

export const PokemonDetailInfo = ({
  pokemonName,
  pokemonNumber,
  isDetailPage,
  weight,
  height,
  types,
}: PokemonDetailInfoProps) => {
  return (
    <div className={styles.pokemonDetailInfo}>
      <p className={styles.pokemonDetailNum}>#{pokemonNumber}</p>

      <div className={styles.pokemonDetailName}>
        <h2>{pokemonName}</h2> <IoVolumeHighOutline />
      </div>

      <div className={styles.btnWrapper}>
        {types.map((type, idx) => (
          <CardButton
            key={idx}
            title={type}
            xtraStyle={idx === 1 ? styles.btnPosition : ""}
            disabled={isDetailPage}
          />
        ))}
      </div>

      <p className={styles.pokemonDetailDesc}>
        A stranger seed was planted on its back at birth the plant sprouts and
        grows with the pokemon
      </p>

      <div className={styles.heightWeight}>
        <div className={styles.height}>
          <h3>Height</h3>
          <p>{height.maximum}</p>
        </div>
        <div className={styles.weight}>
          <h3>Weight</h3>
          <p>{weight.maximum}</p>
        </div>
      </div>

      <h3 className={styles.headerText}>Stats</h3>
      <div className={styles.stats}>
        {statsData.map((stat, idx) => (
          <div key={idx} className={styles.statsData}>
            <h3>{stat.title}</h3>
            <p>{Math.floor(Math.random() * 90) + 10}</p>
          </div>
        ))}
      </div>

      <h3 className={styles.headerText}>Abilities</h3>
      <div className={styles.pokemonAbilities}>
        <p>Overgrow</p>
        <p>Chlorophyll</p>
      </div>

      <CardButton
        title={"Compare with other Pokémon"}
        xtraStyle={styles.btnCompareSm}
        onClick={() => {
          navigate("/comparison");
          setSearchParams({ id: pokemonId });
         }}
      />
    </div>
  );
};

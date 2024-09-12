import { PokemonDetailInfoProps } from "../../interfaces/PokemonDetailInfo.interface";
import { IoVolumeHighOutline } from "react-icons/io5";
import CardBtn from "../CardBtn";
import styles from "./styles.module.scss";

const statsData = [
  { title: "HP", number: 47 },
  { title: "ATK", number: 47 },
  { title: "DEF", number: 47 },
  { title: "SpA", number: 47 },
  { title: "SpD", number: 47 },
  { title: "SPD", number: 47 },
];

export default function PokemonDetailInfo({
  pokemonName,
  pokemonNumber,
  isDetailPage,
}: PokemonDetailInfoProps) {
  return (
    <div className={styles.pokemonDetailInfo}>
      <p className={styles.pokemonDetailNum}>#{pokemonNumber}</p>

      <div className={styles.pokemonDetailName}>
        <h2>{pokemonName}</h2> <IoVolumeHighOutline />
      </div>

      <div className={styles.btnWrapper}>
        <CardBtn title="Grass" disabled={isDetailPage} />
        <CardBtn
          title="Position"
          xtraStyle={styles.btnPosition}
          disabled={isDetailPage}
        />
      </div>

      <p className={styles.pokemonDetailDesc}>
        A stranger seed was planted on its back at birth the plant sprouts and
        grows with the pokemon
      </p>

      <div className={styles.heightWeight}>
        <div className={styles.height}>
          <h3>Height</h3>
          <p>0.7m</p>
        </div>
        <div className={styles.weight}>
          <h3>Weight</h3>
          <p>0.7m</p>
        </div>
      </div>

      <h3 className={styles.headerText}>Stats</h3>
      <div className={styles.stats}>
        {statsData.map((stat, idx) => (
          <div key={idx} className={styles.statsData}>
            <h3>{stat.title}</h3>
            <p>{stat.number}</p>
          </div>
        ))}
      </div>

      <h3 className={styles.headerText}>Abilities</h3>
      <div className={styles.pokemonAbilities}>
        <p>Overgrow</p>
        <p>Chlorophyll</p>
      </div>
    </div>
  );
}

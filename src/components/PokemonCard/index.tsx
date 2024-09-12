import { PokemonCardProps } from "../../interfaces/PokemonCard.interface";
import CardBtn from "../CardBtn";
import styles from "./style.module.scss";

export const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  description,
  imageUrl,
}) => {
  return (
    <div className={styles.pokemonCard}>
      <header>
        <div>
          <CardBtn title="Grass" />
          <CardBtn title="Position" xtraStyle={styles.btnPosition} />
        </div>
        <p className={styles.pokemonNum}>#001</p>
      </header>
      <div className={styles.pokemonBody}>
        <div className={styles.pokemonInfo}>
          <h2>{name}</h2>
          <p className={styles.pokemonDesc}>{description}</p>
          <CardBtn title="Know more" xtraStyle={styles.btnKnowMore} />
        </div>
        <img src={imageUrl} alt={name} className={styles.pokemonImg} />
      </div>
    </div>
  );
};

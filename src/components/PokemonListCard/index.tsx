import { PokemonListCardProps } from "../../interfaces/PokemonCard.interface";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./style.module.scss";
import { CardBtn } from "../CardBtn";
import { setHasFetched } from "../../store/slice/pokemon.slice";
import { useAppDispatch } from "../../hooks/store.hook";

export const PokemonListCard: React.FC<PokemonListCardProps> = ({
  id,
  name,
  number,
  types,
  imageUrl,
  classification,
}) => {
  const navigate = useNavigate();
  const setSearchParams = useSearchParams()[1];
  const dispatch = useAppDispatch();

  const navigateToDetailPage = (id: string) => {
    navigate(`detail`);
    setSearchParams({ id });
    dispatch(setHasFetched(false));
  };

  return (
    <div className={styles.pokemonCard}>
      <header>
        <div>
          {types.map((type, idx) => (
            <CardBtn
              key={idx}
              title={type}
              xtraStyle={idx == 1 ? styles.btnPosition : ""}
            />
          ))}
        </div>
        <p className={styles.pokemonNum}>#{number}</p>
      </header>
      <div className={styles.pokemonBody}>
        <div className={styles.pokemonInfo}>
          <h2>{name}</h2>
          <p className={styles.pokemonDesc}>
            {`A stranger seed was planted on its back at birth the plant sprouts
            and grows with the pokemon. `}
            <b>{`Classification: ${classification}`}</b>
          </p>
          <CardBtn
            title="Know more"
            xtraStyle={styles.btnKnowMore}
            onClick={() => navigateToDetailPage(id)}
          />
        </div>
        <img src={imageUrl} alt={name} className={styles.pokemonImg} />
      </div>
    </div>
  );
};

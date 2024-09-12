import { PokemonDetailCardProps } from "../../interfaces/PokemonDetailCard.interface";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PokemonDetailInfo } from "../PokemonDetailInfo";
import styles from "./styles.module.scss";
import { CardButton } from "../CardButton";
import { FC } from "react";

export const PokemonDetailCard: FC<PokemonDetailCardProps> = ({
  name,
  number,
  imageUrl,
  weight,
  height,
  types,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");
  const navigate = useNavigate();

  return (
    <div className={styles.pokemonDetailCard}>
      <div className={styles.pokemonDetailImgContainer}>
        <img
          className={styles.pokemonDetailImg}
          src={imageUrl}
          alt="Pokemon Image"
        />
      </div>
      <PokemonDetailInfo
        pokemonName={name}
        pokemonNumber={number}
        types={types}
        height={height}
        weight={weight}
        isDetailPage
      />

      {pokemonId && (
        <CardButton
          title={"Compare with other Pokémon"}
          xtraStyle={styles.btnCompare}
          onClick={() => {
            navigate("/comparison");
            setSearchParams({ id: pokemonId });
          }}
        />
      )}
    </div>
  );
};

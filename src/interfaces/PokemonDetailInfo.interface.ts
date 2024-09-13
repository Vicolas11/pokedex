export interface PokemonDetailInfoProps {
  pokemonNumber: string;
  pokemonName: string;
  isDetailPage?: boolean;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  types: string[];
  showBtn?: boolean;
}

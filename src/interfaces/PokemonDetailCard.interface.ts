export interface PokemonDetailCardProps {
  name: string;
  number: string;
  imageUrl: string;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  types: string[];
}

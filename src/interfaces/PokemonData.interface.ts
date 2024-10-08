export interface IPokemonData {
  id: string;
  number: string;
  name: string;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
}

export type DataTypeArray = {
  data: Array<IPokemonData>;
  searchedData: IPokemonData | null;
  searchTerm: string;
  hasFetched: boolean;
};

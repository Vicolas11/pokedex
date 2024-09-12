import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  DataTypeArray,
  IPokemonData,
} from "../../interfaces/PokemonData.interface";

const initialState: DataTypeArray = {
  data: [],
  searchedData: null,
  searchTerm: "",
  hasFetched: true,
};

const pokemonDataSlice = createSlice({
  name: "PokemonData",
  initialState,
  reducers: {
    setPokemonData: (state, { payload }: { payload: IPokemonData[] }) => {
      state.data = payload;
    },
    setPokemonSearchData: (
      state,
      { payload }: { payload: IPokemonData | null }
    ) => {
      state.searchedData = payload;
    },
    resetPokemonData: (state) => {
      state.data = [];
      state.searchedData = null;
      state.searchTerm = "";
      state.hasFetched = true;
    },
    setHasFetched: (state, { payload }: PayloadAction<boolean>) => {
      state.hasFetched = payload;
    },
    setSearchTerm: (state, { payload }: PayloadAction<string>) => {
      state.searchTerm = payload;
    },
  },
});

export const {
  setPokemonData,
  setPokemonSearchData,
  setHasFetched,
  setSearchTerm,
} = pokemonDataSlice.actions;

export default pokemonDataSlice.reducer;

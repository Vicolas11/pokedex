import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  DataTypeArray,
  IPokemonData,
} from "../../interfaces/PokemonData.interface";

const initialState: DataTypeArray = {
  data: [],
  filteredData: [],
  searchTerm: "",
  hasFetched: true,
};

const userDataSlice = createSlice({
  name: "PokemonData",
  initialState,
  reducers: {
    setPokemonData: (state, { payload }: { payload: IPokemonData[] }) => {
      state.data = payload;
    },
    setPokemonSearchData: (state, { payload }: { payload: IPokemonData[] }) => {
      state.filteredData = payload;
    },
    resetPokemonData: (state) => {
      state.data = [];
      state.filteredData = [];
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
} = userDataSlice.actions;

export default userDataSlice.reducer;

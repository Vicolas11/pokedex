import { PokemonList } from "../src/components/PokemonList";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store";
import "@testing-library/jest-dom";

describe("PokemonList", () => {
  const mockPokemonData = [
    {
      id: "001",
      number: "001",
      name: "Bulbasaur",
      weight: {
        minimum: "6.04kg",
        maximum: "7.07kg",
      },
      height: {
        minimum: "0.61m",
        maximum: "0.71m",
      },
      classification: "Seed Pokémon",
      types: ["Grass", "Poison"],
      resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
      fleeRate: 0.1,
      maxCP: 951,
      maxHP: 1071,
      image: "bulbasaur_image_url",
    },
    {
      id: "002",
      number: "002",
      name: "Ivysaur",
      weight: {
        minimum: "11.38kg",
        maximum: "13.0kg",
      },
      height: {
        minimum: "0.99m",
        maximum: "1.2m",
      },
      classification: "Seed Pokémon",
      types: ["Grass", "Poison"],
      resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
      fleeRate: 0.07,
      maxCP: 1483,
      maxHP: 1632,
      image: "ivysaur_image_url",
    },
    {
      id: "003",
      number: "003",
      name: "Venusaur",
      weight: {
        minimum: "90.07kg",
        maximum: "100.5kg",
      },
      height: {
        minimum: "1.75m",
        maximum: "2.01m",
      },
      classification: "Seed Pokémon",
      types: ["Grass", "Poison"],
      resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
      fleeRate: 0.05,
      maxCP: 2720,
      maxHP: 3000,
      image: "venusaur_image_url",
    },
  ];

  test("renders list of Pokémon cards", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonList pokemonData={mockPokemonData} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Bulbasaur/i)).toBeInTheDocument();
    expect(screen.getByText(/Ivysaur/i)).toBeInTheDocument();
  });
});

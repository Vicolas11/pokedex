import { PokemonListPage } from "../src/pages/PokemonListPage";
import { MemoryRouter } from "react-router-dom";
import store from "../src/store/store";
import { Provider } from "react-redux";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";

// Mock Data for Tests
const mockPokemonData = [
  { id: 1, name: "Bulbasaur" },
  { id: 2, name: "Charmander" },
];

// Mock fetch function to return mock data
const mockFetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        data: {
          pokemons: mockPokemonData,
          pokemon: mockPokemonData[0],
        },
      }),
  })
) as unknown as jest.MockedFunction<typeof fetch>;

global.fetch = mockFetch;

describe("PokemonListPage Search Functionality", () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("renders search bar and triggers search functionality", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <PokemonListPage />
          </MemoryRouter>
        </Provider>
      );
    });

    // Ensure the Search Bar is present
    const searchInput = screen.getByPlaceholderText(
      "search eg, ditto or pikachu"
    );
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "Bulbasaur" } });

    fireEvent.keyDown(searchInput, { key: "Enter", code: "Enter" });

    await waitFor(() => {
      expect(screen.getByText(/Search Result -/i)).toBeInTheDocument();
      const bulbasaurElements = screen.getAllByText(/Bulbasaur/i);
      expect(bulbasaurElements.length).toBeGreaterThan(0);
    });
  });
});

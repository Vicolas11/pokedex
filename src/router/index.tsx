import PokemonComparisonPage from "../pages/PokemonComparisonPage";
import PokemonDetailPage from "../pages/PokemonDetailPage";
import { createBrowserRouter } from "react-router-dom";
import PokemonListPage from "../pages/PokemonListPage";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detail",
    element: <PokemonDetailPage />,
  },
  {
    path: "/comparison",
    element: <PokemonComparisonPage />,
  },
]);

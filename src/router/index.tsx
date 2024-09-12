import { PokemonComparisonPage } from "../pages/PokemonComparisonPage";
import { PokemonDetailPage } from "../pages/PokemonDetailPage";
import { PokemonListPage } from "../pages/PokemonListPage";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detail",
    element: <PokemonDetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/comparison",
    element: <PokemonComparisonPage />,
    errorElement: <ErrorPage />,
  },
]);

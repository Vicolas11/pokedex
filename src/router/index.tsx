import PokemonComparisonPage from "../pages/PokemonComparisonPage";
import PokemonDetailPage from "../pages/PokemonDetailPage";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  {
    path: "/detail",
    element: <PokemonDetailPage />,
  },
  {
    path: "/comparison",
    element: <PokemonComparisonPage />,
  },
]);

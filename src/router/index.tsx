import PokemonComparisonPage from "../pages/PokemonComparisonPage";
import PokemonDetailPage from "../pages/PokemonDetailPage";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/main.layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/detail",
    element: (
      <MainLayout>
        <PokemonDetailPage />
      </MainLayout>
    ),
  },
  {
    path: "/comparison",
    element: (
      <MainLayout>
        <PokemonComparisonPage />
      </MainLayout>
    ),
  },
]);

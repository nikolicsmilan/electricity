import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutDefault from "./layouts/LayoutDefault";
import Home from "./pages/Home/Home";
import LawRoutes from "./pages/Law/LawRoutes";        // Törvények aloldalak
import Kirchhoff1 from "./pages/Law/components/Kirchoff1/Kirchhoff1";
import Kirchhoff2 from "./pages/Law/components/Kirchoff2/Kirchhoff2";
import OhmsLaw from "./pages/Law/components/OhmsLaw/OhmsLaw";
import DiodesRoutes from "./pages/Diodes/DiodesRoutes";  // Diódák aloldalak
import DiodeDetails from "./pages/Diodes/components/DiodeDetails";
import CircuitsRoutes from "./pages/Circuits/CircuitsRoutes "; // Kapcsolások aloldalak
import CircuitDetails from "./pages/Circuits/components/CircuitDetails";
import Error from "./shared/Error/Error";   // Hibaoldal

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDefault />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> }, // Kezdőlap
      {
        path: "law",
        element: <LawRoutes />,  // Törvények aloldalak
        children: [
          { path: "kirchhoff1", element: <Kirchhoff1 /> },   // Kirchhoff I
          { path: "kirchhoff2", element: <Kirchhoff2 /> },   // Kirchhoff II
          { path: "ohms-law", element: <OhmsLaw /> },        // Ohm törvényei
        ],
      },
      {
        path: "diodes",
        element: <DiodesRoutes />, // Diódák aloldalak
        children: [
          { path: "details", element: <DiodeDetails /> },    // Dióda részletek
        ],
      },
      {
        path: "circuits",
        element: <CircuitsRoutes />, // Kapcsolások aloldalak
        children: [
          { path: "details", element: <CircuitDetails /> },  // Kapcsolási áramkörök részletei
        ],
      },
    ],
  },
]);

const App: React.FC = () => {
  const [theme] = useState<string>("light"); // Típus megadása a useState-hez
  return <div className={`${theme}`}>
  {/* RouterProvider a létrehozott router-rel */}
  <RouterProvider router={router} />
</div>;
};

export default App;



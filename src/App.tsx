import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { useGeneralContext } from "./context/GeneralContext"; // A megfelelő útvonal megadása
import LayoutHome from "./layouts/LayoutHome"; // LayoutHome komponens importálása
import Home from "./pages/Home"; // Home komponens importálása
import Error from "./shared/Error/Error"; // Hibaoldal komponens importálása

// Router létrehozása
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> }, // Alapértelmezett route a Home komponens
    ],
  },
]);

const App = () => {
 // const { toggle, setToggle } = useGeneralContext(); // Hozzáférés a kontextus adataihoz
  const [theme] = useState<string>("light"); // Típus megadása a useState-hez

  return (
    <div className={`${theme}`}>
      {/* RouterProvider a létrehozott router-rel */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

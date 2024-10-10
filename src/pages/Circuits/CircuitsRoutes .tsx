import { Outlet, Link } from "react-router-dom";
import CircuitDetails from "./components/CircuitDetails";

const CircuitsRoutes = () => {
  return (
    <div>
      <h2>Kapcsolási áramkörök</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Kapcsolási áramkör részletek</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default CircuitsRoutes;

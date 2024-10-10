import { Outlet, Link } from "react-router-dom";
import DiodeDetails from "./components/DiodeDetails";

const DiodesRoutes = () => {
  return (
    <div>
      <h2>Diódák</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Dióda részletek</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default DiodesRoutes;

  
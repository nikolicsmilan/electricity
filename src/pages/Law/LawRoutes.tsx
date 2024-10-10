// src/pages/Law/Law.tsx
import { Outlet, Link } from "react-router-dom";

const LawRoutes: React.FC = () => {
  return (
    <div className="bg-orange-400 w-full flex flex-col">
      <h2>Törvények</h2>
      <nav>
        <ul>
          <li>
            <Link to="kirchhoff1">Kirchhoff I törvénye</Link>
          </li>
          <li>
            <Link to="kirchhoff2">Kirchhoff II törvénye</Link>
          </li>
          <li>
            <Link to="ohms-law">Ohm törvényei</Link>
          </li>
        </ul>
      </nav>
  
    </div>
  );
};

export default LawRoutes;

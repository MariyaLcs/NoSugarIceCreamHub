import { getFlavors } from "../api";
import { Outlet, NavLink } from "react-router-dom";

export default function Flavors() {
  const flavors = getFlavors();
  return (
    <div className="container">
      <h1>Flavors</h1>
      <ul className="flavors">
        {flavors.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.id}
              className={({ isActive }) =>
                isActive ? "category-active" : null
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

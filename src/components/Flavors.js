import { getFlavors } from "../api";
import { Outlet, Link } from "react-router-dom";

export default function Flavors() {
  const flavors = getFlavors();
  return (
    <div className="container">
      <h1>Flavors</h1>
      <ul className="flavors">
        {flavors.map((item) => (
          <li key={item.id}>
            <Link to={item.id}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

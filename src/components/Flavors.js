import { getFlavors } from "../api";
import { Outlet } from "react-router-dom";

export default function Flavors() {
  const flavors = getFlavors();
  return (
    <div className="container">
      <h1>Flavors</h1>
      <ul className="flavors">
        {flavors.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

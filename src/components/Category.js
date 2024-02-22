import { useParams, NavLink, Outlet } from "react-router-dom";
import { getFlavor } from "../api";

export default function Category() {
  const { categoryId } = useParams();
  const flavor = getFlavor(categoryId);
  return (
    <>
      <h2>{flavor.name}</h2>
      <ul className="session-list">
        {flavor?.sessions.map((session) => (
          <li className="session" key={session.id}>
            <NavLink
              to={session.id}
              className={({ isActive }) => (isActive ? "session-active" : null)}
            >
              <p className="session-name">{session.name}</p>
              <p>{session.desc}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}

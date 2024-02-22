import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="sugar-free ice cream"
          title="Pure Joy IceCream | Home"
        />
      </Link>
      <nav>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getClass}>
          About
        </NavLink>
        <NavLink to="/flavors" className={getClass}>
          Flavors
        </NavLink>
      </nav>
    </header>
  );
}

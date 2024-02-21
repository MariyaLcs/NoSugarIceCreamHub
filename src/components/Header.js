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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/flavors">Flavors</Link>
      </nav>
    </header>
  );
}

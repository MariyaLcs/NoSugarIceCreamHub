import { Routes, Route, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Home from "./Home";
import Flavors from "./Flavors";

function App() {
  return (
    <div className="app">
      <header className="container">
        <img
          className="logo"
          src={logo}
          alt="sugar-free ice cream"
          title="Pure Joy IceCream | Home"
        />
        <nav>
          <Link to="/flavors">Flavors</Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Home title="Welcome to Pure Joy IceCream" />}
        />
        <Route path="/flavors" element={<Flavors />} />
      </Routes>
      <footer className="container">
        &copy;2023 | <a href="/">Pure Joy IceCream</a>
      </footer>
    </div>
  );
}

export default App;

import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Flavors from "./Flavors";
import Header from "./Header";
import Category from "./Category";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home title="Welcome to Pure Joy IceCream" />}
        />
        <Route path="/flavors" element={<Flavors />}>
          <Route path="/flavors/category" element={<Category />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
      <footer className="container">
        &copy;2023 | <a href="/">Pure Joy IceCream</a>
      </footer>
    </div>
  );
}

export default App;

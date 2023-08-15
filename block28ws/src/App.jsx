import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div id="container">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
      </div>

      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

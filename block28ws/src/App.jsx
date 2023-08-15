import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Pink from "./components/Pink";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div id="container">
      <Navbar />
      {/* <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
      </div> */}

      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/pink" element={<Pink />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

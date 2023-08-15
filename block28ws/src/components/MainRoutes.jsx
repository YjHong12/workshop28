import { Routes, Route, Link } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Pink from "./Pink";
import Home from "./Home";

export default function MainRoutes() {
  return (
    <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/pink" element={<Pink />} />
          <Route path="/" element={<Home />} />
    </Routes>
  );
}

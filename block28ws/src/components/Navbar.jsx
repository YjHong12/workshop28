import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="navbar">
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/pink">Pink</Link>
      <Link to="/">Home</Link>
    </div>
  );
}

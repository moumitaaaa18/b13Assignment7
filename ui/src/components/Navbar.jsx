import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">KeenKeeper</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/stats">Stats</Link>
      </div>
    </div>
  );
}

export default Navbar;
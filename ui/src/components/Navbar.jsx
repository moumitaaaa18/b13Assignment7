import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
  Keen
  <span style={{ color: "#1f5c3f" }}>Keeper</span>
</h2>

      <div className="nav-links">
        <NavLink to="/">⌂ Home</NavLink>
        <NavLink to="/timeline">◴ Timeline</NavLink>
        <NavLink to="/stats">⌁ Stats</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
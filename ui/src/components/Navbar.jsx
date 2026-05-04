import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header style={styles.navbar}>
      <div style={styles.logo}>
  Keen<span style={styles.green}>Keeper</span>
</div>

      <nav style={styles.links}>
        <NavLink to="/" style={navStyle}>⌂ Home</NavLink>
        <NavLink to="/timeline" style={navStyle}>◴ Timeline</NavLink>
        <NavLink to="/stats" style={navStyle}>⌁ Stats</NavLink>
      </nav>
    </header>
  );
}

const navStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "#fff" : "#6b7280",
  background: isActive ? "#1f5c3f" : "transparent",
  padding: "9px 14px",
  borderRadius: "4px",
  fontWeight: "700",
  fontSize: "14px"
});

const styles = {
  navbar: {
    height: "70px",
    background: "#fff",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 70px"
  },
  logo: {
    fontSize: "21px",
    fontWeight: "800",
    color: "#1f2937"
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  green: {
  color: "#1f5c3f"
  }
}

export default Navbar;
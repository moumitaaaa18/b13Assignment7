import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>
        Keen<span style={styles.green}>Keeper</span>
      </h2>

      <div style={styles.links}>
        <NavLink to="/" style={navStyle}>
          Home
        </NavLink>

        <NavLink to="/timeline" style={navStyle}>
          Timeline
        </NavLink>

        <NavLink to="/stats" style={navStyle}>
          Stats
        </NavLink>
      </div>
    </nav>
  );
}

const navStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "#fff" : "#6b7280",
  background: isActive ? "#1f5c3f" : "transparent",
  padding: "8px 6px",
  borderRadius: "5px",
  fontWeight: "700",
  fontSize: "12px",
  textAlign: "center",
  whiteSpace: "nowrap"
});

const styles = {
  navbar: {
    width: "100%",
    background: "#fff",
    borderBottom: "1px solid #e5e7eb",
    padding: "12px 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    boxSizing: "border-box"
  },

  logo: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "800",
    color: "#1f2937"
  },

  green: {
    color: "#1f5c3f"
  },

  links: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "6px",
    boxSizing: "border-box"
  }
};

export default Navbar;
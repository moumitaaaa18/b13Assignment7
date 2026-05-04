import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={styles.navbar}>
      <h2 style={styles.logo}>KeenKeeper</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/timeline" style={styles.link}>Timeline</Link>
        <Link to="/stats" style={styles.link}>Stats</Link>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff"
  },
  logo: {
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    gap: "20px"
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500"
  }
};

export default Navbar;
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.text}>
        The page you are looking for does not exist.
      </p>

      <Link to="/" style={styles.btn}>
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;

const styles = {
  container: {
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  code: {
    fontSize: "80px",
    margin: "0",
    color: "#1f5c3f"
  },
  title: {
    margin: "10px 0"
  },
  text: {
    color: "#6b7280",
    marginBottom: "20px"
  },
  btn: {
    padding: "10px 20px",
    background: "#1f5c3f",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none"
  }
};
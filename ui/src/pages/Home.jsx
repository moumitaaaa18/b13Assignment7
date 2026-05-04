import friends from "../data/friends";
import FriendCard from "../components/FriendCard";

function Home() {
  return (
    <div>

      {/* ===== HERO SECTION ===== */}
      <h1 style={styles.title}>Friends to keep close in your life</h1>

      <p style={styles.subtitle}>
        Your personal shelf of meaningful connections.
      </p>

      <button style={styles.button}>+ Add a Friend</button>

      {/* ===== STATS ===== */}
      <div style={styles.stats}>
        <div style={styles.card}>
          <h2>10</h2>
          <p>Total Friends</p>
        </div>

        <div style={styles.card}>
          <h2>3</h2>
          <p>On Track</p>
        </div>

        <div style={styles.card}>
          <h2>6</h2>
          <p>Need Attention</p>
        </div>

        <div style={styles.card}>
          <h2>12</h2>
          <p>Interactions</p>
        </div>
      </div>

      {/* ===== FRIEND LIST ===== */}
      <h2 style={styles.sectionTitle}>Your Friends</h2>

      <div style={styles.grid}>
        {friends.map((f) => (
          <FriendCard key={f.id} friend={f} />
        ))}
      </div>

    </div>
  );
}

export default Home;



// ===== STYLES =====
const styles = {
  title: {
    textAlign: "center",
    marginTop: "40px",
    fontSize: "28px"
  },

  subtitle: {
    textAlign: "center",
    color: "gray",
    marginBottom: "10px"
  },

  button: {
    display: "block",
    margin: "20px auto",
    padding: "10px 20px",
    background: "#2e7d32",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap"
  },

  card: {
    padding: "20px",
    background: "#f5f5f5",
    borderRadius: "10px",
    textAlign: "center",
    width: "120px"
  },

  sectionTitle: {
    marginLeft: "20px",
    marginTop: "30px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    padding: "20px"
  }
};
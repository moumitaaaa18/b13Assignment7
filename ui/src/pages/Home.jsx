import friends from "../data/friends";
import FriendCard from "../components/FriendCard";

function Home() {
  return (
    <section style={styles.page}>
      <div style={styles.container}>
        <div style={styles.hero}>
          <h1 style={styles.title}>Friends to keep close in your life</h1>
          <p style={styles.subtitle}>
            Your personal shelf of meaningful connections. Browse, tend, and nurture the
            relationships that matter most.
          </p>
          <button style={styles.button}>+ Add a Friend</button>
        </div>

        <div style={styles.stats}>
  <div style={styles.statCard}>
    <h2>{friends.length}</h2>
    <p>Total Friends</p>
  </div>

  <div style={styles.statCard}>
    <h2>{friends.filter(f => f.daysAgo < 30).length}</h2>
    <p>On Track</p>
  </div>

  <div style={styles.statCard}>
    <h2>{friends.filter(f => f.daysAgo >= 30).length}</h2>
    <p>Need Attention</p>
  </div>

  <div style={styles.statCard}>
    <h2>{friends.length + 5}</h2>
    <p>Interactions This Month</p>
  </div>
</div>

        <hr style={styles.line} />

        <h2 style={styles.sectionTitle}>Your Friends</h2>

        <div style={styles.grid}>
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;

const styles = {
  page: {
    background: "#f6f8fa",
    minHeight: "600px",
    padding: "55px 20px 70px"
  },
  container: {
    maxWidth: "980px",
    margin: "0 auto"
  },
  hero: {
    textAlign: "center"
  },
  title: {
    fontSize: "34px",
    color: "#1f2937",
    margin: "0 0 10px",
    fontWeight: "800"
  },
  subtitle: {
    maxWidth: "560px",
    margin: "0 auto",
    color: "#6b7280",
    fontSize: "14px",
    lineHeight: "1.5"
  },
  button: {
    marginTop: "22px",
    background: "#1f5c3f",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 18px",
    fontWeight: "700",
    cursor: "pointer"
  },
  stats: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gap: "12px",
  marginTop: "30px",
  marginBottom: "30px",
},
  statCard: {
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    textAlign: "center",
    padding: "24px 15px"
  },
  line: {
    border: "none",
    borderTop: "1px solid #e5e7eb",
    margin: "35px 0 25px"
  },
  sectionTitle: {
    color: "#1f2937",
    fontSize: "22px",
    marginBottom: "20px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px, 1fr))",
    gap: "22px"
  }
};
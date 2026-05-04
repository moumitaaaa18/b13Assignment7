import friends from "../data/friends";

function Stats() {
  const total = friends.length;
  const onTrack = friends.filter(f => f.daysAgo < 30).length;
  const needAttention = friends.filter(f => f.daysAgo >= 30).length;

  // category count
  const categories = {};
  friends.forEach(f => {
    categories[f.category] = (categories[f.category] || 0) + 1;
  });

  return (
    <section style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Your Relationship Stats</h1>
        <p style={styles.subtitle}>
          Insights into how you're maintaining your connections.
        </p>

        {/* Top stats */}
        <div style={styles.stats}>
          <div style={styles.card}><h2>{total}</h2><p>Total Friends</p></div>
          <div style={styles.card}><h2>{onTrack}</h2><p>On Track</p></div>
          <div style={styles.card}><h2>{needAttention}</h2><p>Need Attention</p></div>
        </div>

        {/* Category breakdown */}
        <h2 style={styles.sectionTitle}>Category Breakdown</h2>

        <div style={styles.grid}>
          {Object.entries(categories).map(([key, value]) => (
            <div key={key} style={styles.categoryCard}>
              <h3>{key}</h3>
              <p>{value} friends</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;

const styles = {
  page: {
    background: "#f6f8fa",
    padding: "50px 20px"
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto"
  },
  title: {
    fontSize: "32px",
    fontWeight: "800",
    color: "#1f2937",
    marginBottom: "10px"
  },
  subtitle: {
    color: "#6b7280",
    marginBottom: "30px"
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginBottom: "40px"
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  },

  sectionTitle: {
    fontSize: "20px",
    marginBottom: "20px",
    color: "#1f2937"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px"
  },
  categoryCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  }
};
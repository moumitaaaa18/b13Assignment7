import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Timeline() {
  const { timeline } = useOutletContext();
  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  const getIcon = (type) => {
    if (type === "Call") return "📞";
    if (type === "Text") return "💬";
    if (type === "Video") return "📹";
    return "🤝";
  };

  return (
    <section style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Timeline</h1>

        <select
          style={styles.filter}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>

        {filteredTimeline.length === 0 ? (
          <div style={styles.emptyBox}>
            <p>No interactions yet</p>
            <small>Go to a friend profile and use Call, Text, or Video.</small>
          </div>
        ) : (
          <div style={styles.list}>
            {filteredTimeline.map((item) => (
              <div key={item.id} style={styles.card}>
                <span style={styles.icon}>{getIcon(item.type)}</span>

                <div>
                  <h3 style={styles.text}>
                    {item.type} with {item.name}
                  </h3>
                  <p style={styles.date}>{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Timeline;

const styles = {
  page: {
    background: "#f6f8fa",
    padding: "50px 20px",
    minHeight: "620px"
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto"
  },
  title: {
    fontSize: "34px",
    fontWeight: "800",
    marginBottom: "20px",
    color: "#1f2937"
  },
  filter: {
    width: "260px",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    marginBottom: "20px",
    color: "#6b7280",
    background: "#fff"
  },
  emptyBox: {
    background: "#fff",
    padding: "30px",
    borderRadius: "8px",
    color: "#6b7280",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  card: {
    background: "#fff",
    padding: "18px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },
  icon: {
    fontSize: "24px"
  },
  text: {
    margin: 0,
    fontSize: "15px",
    color: "#1f2937"
  },
  date: {
    margin: 0,
    fontSize: "12px",
    color: "#6b7280"
  }
};
import { useState } from "react";
import timeline from "../data/timeline";

function Timeline() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? timeline
      : timeline.filter((t) => t.type === filter);

  const getIcon = (type) => {
    if (type === "meetup") return "🤝";
    if (type === "text") return "💬";
    if (type === "video") return "📹";
    if (type === "call") return "📞";
  };

  return (
    <section style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Timeline</h1>

        {/* Filter */}
        <select
          style={styles.filter}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Filter timeline</option>
          <option value="meetup">Meetups</option>
          <option value="text">Texts</option>
          <option value="video">Videos</option>
          <option value="call">Calls</option>
        </select>

        {/* List */}
        <div style={styles.list}>
          {filtered.map((item) => (
            <div key={item.id} style={styles.card}>
              <div style={styles.left}>
                <span style={styles.icon}>{getIcon(item.type)}</span>

                <div>
                  <h3 style={styles.text}>
                    {item.type.charAt(0).toUpperCase() +
                      item.type.slice(1)}{" "}
                    with {item.name}
                  </h3>
                  <p style={styles.date}>{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;

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
    fontSize: "34px",
    fontWeight: "800",
    marginBottom: "20px",
    color: "#1f2937"
  },
  filter: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    marginBottom: "20px"
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
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },
  icon: {
    fontSize: "22px"
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
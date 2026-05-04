import { Link } from "react-router-dom";

function FriendCard({ friend }) {
  if (!friend) return null;

  const status = friend.status || "Overdue";

  return (
    <Link to={`/friend/${friend.id}`} style={styles.link}>
      <div style={styles.card}>
        <img src={friend.image} alt={friend.name} style={styles.img} />

        <h3 style={styles.name}>{friend.name}</h3>
        <p style={styles.days}>{friend.daysAgo}d ago</p>

        <div style={styles.tags}>
          <span style={styles.category}>{friend.category}</span>
          <span
            style={{
              ...styles.status,
              background:
                status === "On-Track"
                  ? "#1f5c3f"
                  : status === "Almost Due"
                  ? "#f5b544"
                  : "#ef4444"
            }}
          >
            {status}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default FriendCard;

const styles = {
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  card: {
    background: "#fff",
    borderRadius: "8px",
    minHeight: "165px",
    padding: "24px 16px 18px",
    textAlign: "center",
    boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
    border: "1px solid #eef0f2",
    cursor: "pointer"
  },
  img: {
    width: "62px",
    height: "62px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px"
  },
  name: {
    margin: "0",
    fontSize: "16px",
    fontWeight: "800",
    color: "#1f2937"
  },
  days: {
    margin: "4px 0 8px",
    fontSize: "12px",
    color: "#6b7280"
  },
  tags: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px"
  },
  category: {
    background: "#dcfce7",
    color: "#166534",
    fontSize: "10px",
    fontWeight: "800",
    padding: "4px 9px",
    borderRadius: "999px",
    textTransform: "uppercase"
  },
  status: {
    color: "#fff",
    fontSize: "10px",
    fontWeight: "800",
    padding: "4px 9px",
    borderRadius: "999px"
  }
};
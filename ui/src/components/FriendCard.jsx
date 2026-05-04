import { Link } from "react-router-dom";

function FriendCard({ friend }) {
  if (!friend) return null;

  return (
    <Link to={`/friend/${friend.id}`} style={styles.link}>
      <div style={styles.card}>
        <img src={friend.image} alt={friend.name} style={styles.img} />

        <h3 style={styles.name}>{friend.name}</h3>
        <p style={styles.days}>{friend.daysAgo}d ago</p>

        <span style={styles.tag}>{friend.category}</span>
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
    textAlign: "center",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
    cursor: "pointer"
  },
  img: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px"
  },
  name: {
    margin: "5px 0",
    fontSize: "16px",
    color: "#1f2937"
  },
  days: {
    fontSize: "12px",
    color: "#6b7280",
    marginBottom: "8px"
  },
  tag: {
    display: "inline-block",
    background: "#1f5c3f",
    color: "white",
    fontSize: "11px",
    padding: "4px 10px",
    borderRadius: "20px"
  }
};
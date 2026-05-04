function FriendCard({ friend }) {
  return (
    <div style={styles.card}>
      <img src={friend.image} alt="" style={styles.img} />

      <h3 style={styles.name}>{friend.name}</h3>
      <p style={styles.time}>{friend.daysAgo}</p>

      <div style={styles.tags}>
        <span style={styles.tag}>{friend.status}</span>
      </div>

      <div style={styles.status}>On Track</div>
    </div>
  );
}

export default FriendCard;

const styles = {
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },

  img: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px"
  },

  name: {
    margin: "5px 0"
  },

  time: {
    fontSize: "12px",
    color: "gray"
  },

  tags: {
    marginTop: "8px"
  },

  tag: {
    background: "#e0f2f1",
    color: "#2e7d32",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px"
  },

  status: {
    marginTop: "10px",
    background: "#d4edda",
    color: "#155724",
    padding: "5px",
    borderRadius: "6px",
    fontSize: "12px"
  }
};
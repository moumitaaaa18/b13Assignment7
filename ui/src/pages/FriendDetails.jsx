import { useParams, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import friends from "../data/friends";

function FriendDetails() {
  const { id } = useParams();
  const { addTimeline } = useOutletContext();

  const friend = friends.find((f) => f.id === Number(id)) || friends[0];

  const handleAction = (type) => {
    addTimeline(type, friend.name);
    toast.success(`${type} with ${friend.name}`);
  };

  return (
    <section style={styles.page}>
      <div style={styles.container}>
        <div style={styles.layout}>
          <div>
            <div style={styles.profileCard}>
              <img src={friend.image} alt={friend.name} style={styles.avatar} />
              <h2 style={styles.name}>{friend.name}</h2>

              <span style={styles.overdue}>Overdue</span>
              <span style={styles.category}>{friend.category}</span>

              <p style={styles.quote}>"Former colleague, great mentor"</p>
              <p style={styles.preferred}>Preferred: email</p>
            </div>

            <button style={styles.sideBtn}>⏰ Snooze 2 Weeks</button>
            <button style={styles.sideBtn}>🗃 Archive</button>
            <button style={styles.deleteBtn}>🗑 Delete</button>
          </div>

          <div style={styles.right}>
            <div style={styles.topStats}>
              <div style={styles.statBox}>
                <h2>{friend.daysAgo}</h2>
                <p>Days Since Contact</p>
              </div>

              <div style={styles.statBox}>
                <h2>30</h2>
                <p>Goal (Days)</p>
              </div>

              <div style={styles.statBox}>
                <h2>Feb 27, 2026</h2>
                <p>Next Due</p>
              </div>
            </div>

            <div style={styles.goalCard}>
              <div>
                <h3>Relationship Goal</h3>
                <p>
                  Connect every <b>30 days</b>
                </p>
              </div>
              <button style={styles.editBtn}>Edit</button>
            </div>

            <div style={styles.checkCard}>
              <h3>Quick Check-In</h3>

              <div style={styles.actions}>
                <button style={styles.actionBtn} onClick={() => handleAction("Call")}>
                  📞
                  <span>Call</span>
                </button>

                <button style={styles.actionBtn} onClick={() => handleAction("Text")}>
                  💬
                  <span>Text</span>
                </button>

                <button style={styles.actionBtn} onClick={() => handleAction("Video")}>
                  📹
                  <span>Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FriendDetails;

const styles = {
  page: {
    background: "#f6f8fa",
    padding: "80px 20px",
    minHeight: "600px"
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto"
  },
  layout: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px"
},
  profileCard: {
    background: "#fff",
    borderRadius: "10px",
    padding: "25px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
  },
  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover"
  },
  name: {
    margin: "10px 0",
    color: "#1f2937"
  },
  overdue: {
    display: "block",
    width: "fit-content",
    margin: "5px auto",
    background: "#ef4444",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700"
  },
  category: {
    display: "block",
    width: "fit-content",
    margin: "10px auto",
    background: "#dcfce7",
    color: "#166534",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700"
  },
  quote: {
    fontStyle: "italic",
    color: "#6b7280"
  },
  preferred: {
    fontSize: "13px",
    color: "#9ca3af"
  },
  sideBtn: {
    width: "100%",
    marginTop: "15px",
    padding: "12px",
    border: "1px solid #e5e7eb",
    background: "#fff",
    borderRadius: "5px",
    fontWeight: "700",
    color: "#374151"
  },
  deleteBtn: {
    width: "100%",
    marginTop: "15px",
    padding: "12px",
    border: "1px solid #e5e7eb",
    background: "#fff",
    color: "#ef4444",
    borderRadius: "5px",
    fontWeight: "700"
  },
  right: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  topStats: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "15px"
},
  statBox: {
    background: "#fff",
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
  },
  goalCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
  },
  editBtn: {
    padding: "6px 12px",
    border: "1px solid #e5e7eb",
    background: "#f9fafb",
    borderRadius: "4px"
  },
  checkCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
  },
  actions: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "10px"
  },
  actionBtn: {
    height: "80px",
    border: "1px solid #e5e7eb",
    background: "#f9fafb",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    fontSize: "18px",
    cursor: "pointer"
  }
};
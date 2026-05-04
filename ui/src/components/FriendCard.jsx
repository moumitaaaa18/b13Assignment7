import { Link } from "react-router-dom";

function FriendCard({ friend }) {
  const statusClass =
    friend.status === "overdue"
      ? "red"
      : friend.status === "almost-due"
      ? "yellow"
      : "green";

  return (
    <Link to={`/friend/${friend.id}`} className="card">
      <img src={friend.picture} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p>{friend.days_since_contact}d ago</p>

      <div className="tags">
        {friend.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>

      <span className={`status ${statusClass}`}>
        {friend.status}
      </span>
    </Link>
  );
}

export default FriendCard;
import { friends } from "../data/friends";
import FriendCard from "../components/FriendCard";

function Home() {
  return (
    <div className="home">

      <h1>Friends to keep close in your life</h1>
      <p className="subtitle">
        Your personal shelf of meaningful connections.
      </p>

      <button className="add-btn">+ Add a Friend</button>

      <div className="stats-box">
        <div><h2>10</h2><p>Total Friends</p></div>
        <div><h2>3</h2><p>On Track</p></div>
        <div><h2>6</h2><p>Need Attention</p></div>
        <div><h2>12</h2><p>Interactions</p></div>
      </div>

      <h2>Your Friends</h2>

      <div className="grid">
        {friends.map((f) => (
          <FriendCard key={f.id} friend={f} />
        ))}
      </div>

    </div>
  );
}

export default Home;
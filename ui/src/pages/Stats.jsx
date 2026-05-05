import { useOutletContext } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function Stats() {
  const { timeline } = useOutletContext();

  const callCount = timeline.filter((item) => item.type === "Call").length;
  const textCount = timeline.filter((item) => item.type === "Text").length;
  const videoCount = timeline.filter((item) => item.type === "Video").length;

  const data = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount }
  ];

  const colors = ["#1f5c3f", "#7c3aed", "#0ea5e9"];
  const hasData = callCount + textCount + videoCount > 0;

  return (
    <section style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Friendship Analytics</h1>

        <div style={styles.chartCard}>
          <h3 style={styles.cardTitle}>Interaction Type</h3>

          {hasData ? (
            <ResponsiveContainer width="100%" height={330}>
              <PieChart>
                <Tooltip />
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={6}
                >
                  {data.map((entry, index) => (
                    <Cell key={entry.name} fill={colors[index]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div style={styles.empty}>
              <p>No interaction data yet</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Stats;

const styles = {
  page: {
    background: "#f6f8fa",
    minHeight: "620px",
    padding: "75px 20px"
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto"
  },
  title: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#1f2937",
    marginBottom: "40px"
  },
  chartCard: {
    background: "#fff",
    borderRadius: "8px",
    padding: "34px",
    minHeight: "360px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
  },
  cardTitle: {
    color: "#1f2937",
    fontSize: "20px",
    marginBottom: "20px"
  },
  empty: {
    height: "260px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6b7280",
    fontSize: "18px"
  }
};
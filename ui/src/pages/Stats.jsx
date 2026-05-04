import { useOutletContext } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Stats() {
  const { timeline } = useOutletContext();

  const callCount = timeline.filter((item) => item.type === "Call").length;
  const textCount = timeline.filter((item) => item.type === "Text").length;
  const videoCount = timeline.filter((item) => item.type === "Video").length;

  const data = [
    { name: "Text", value: textCount, color: "#7c3aed" },
    { name: "Call", value: callCount, color: "#1f5c3f" },
    { name: "Video", value: videoCount, color: "#2fac66" }
  ];

  const hasData = data.some((item) => item.value > 0);

  return (
    <section style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Friendship Analytics</h1>

        <div style={styles.chartCard}>
          <h3 style={styles.cardTitle}>By Interaction Type</h3>

          {hasData ? (
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Tooltip />
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={75}
                  outerRadius={110}
                  paddingAngle={6}
                >
                  {data.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>

                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div style={styles.empty}>
              No interaction data yet
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
    maxWidth: "1180px",
    margin: "0 auto"
  },
  title: {
    fontSize: "42px",
    fontWeight: "800",
    color: "#1f2937",
    marginBottom: "30px"
  },
  chartCard: {
    background: "#fff",
    borderRadius: "8px",
    padding: "34px",
    minHeight: "360px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
  },
  cardTitle: {
    color: "#1f5c3f",
    fontSize: "18px",
    marginBottom: "20px"
  },
  empty: {
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6b7280"
  }
};
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

// Dummy data (later timeline theke dynamically nite parba)
const data = [
  { name: "Call", value: 3 },
  { name: "Text", value: 5 },
  { name: "Video", value: 2 }
];

const COLORS = ["#2E7D32", "#6A1B9A", "#0288D1"];

const Stats = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Friendship Analytics</h1>

      <div style={styles.chartCard}>
        <h3 style={styles.subHeading}>Interaction Type</h3>

        <div style={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;

const styles = {
  container: {
    padding: "30px",
    textAlign: "center"
  },

  heading: {
    fontSize: "32px",
    marginBottom: "30px"
  },

  chartCard: {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
  },

  subHeading: {
    marginBottom: "20px"
  },

  chartWrapper: {
    width: "100%",
    height: "320px"
  }
};
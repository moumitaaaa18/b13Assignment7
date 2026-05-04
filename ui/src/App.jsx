import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const addTimeline = (type, name) => {
    const newItem = {
      id: Date.now(),
      type,
      name,
      date: new Date().toLocaleString()
    };

    setTimeline((prev) => [newItem, ...prev]);
  };

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="app">
      <Navbar />

      {loading ? (
        <div style={styles.loadingBox}>
          <div style={styles.spinner}></div>
          <p>Loading...</p>
        </div>
      ) : (
        <main className="main">
          <Outlet context={{ timeline, addTimeline }} />
        </main>
      )}

      <ToastContainer position="top-center" autoClose={2000} />

      <Footer />
    </div>
  );
}

export default App;

const styles = {
  loadingBox: {
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#1f5c3f",
    fontWeight: "700"
  },
  spinner: {
    width: "45px",
    height: "45px",
    border: "5px solid #d1d5db",
    borderTop: "5px solid #1f5c3f",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  }
};
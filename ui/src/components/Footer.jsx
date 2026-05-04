function Footer() {
  return (
    <footer style={styles.footer}>
      <h1 style={styles.title}>KeenKeeper</h1>

      <p style={styles.subtitle}>
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <h4 style={styles.socialTitle}>Social Links</h4>

      <div style={styles.icons}>
        <span style={styles.icon}>●</span>
        <span style={styles.icon}>f</span>
        <span style={styles.icon}>x</span>
      </div>

      <div style={styles.bottom}>
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div style={styles.bottomLinks}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const styles = {
  footer: {
    background: "#1f5c3f",
    color: "white",
    textAlign: "center",
    padding: "70px 40px 35px",
    marginTop: "60px"
  },
  title: {
    fontSize: "46px",
    margin: "0 0 15px",
    fontWeight: "700"
  },
  subtitle: {
    color: "#d7e5de",
    fontSize: "14px",
    margin: "0 auto",
    maxWidth: "720px"
  },
  socialTitle: {
    marginTop: "28px",
    marginBottom: "12px"
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "12px"
  },
  icon: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "white",
    color: "#1f5c3f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700"
  },
  bottom: {
    marginTop: "55px",
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
    fontSize: "13px",
    color: "#c6d8d0"
  },
  bottomLinks: {
    display: "flex",
    gap: "35px",
    flexWrap: "wrap"
  }
};
function About() {
  return (
    <div style={{
      backgroundColor: "#ffffff",
      padding: "24px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      maxWidth: "600px",
      marginTop: "16px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
    }}>
      <h2 style={{ marginTop: 0, color: "#1e293b" }}>About Learning Hub</h2>
      <p style={{ color: "#475569", lineHeight: "1.6" }}>
        Learning Hub is a centralized tracking dashboard built with React. 
        It helps software engineering students organize their study plans, track logged hours, and monitor their learning journey seamlessly.
      </p>
      <p style={{ color: "#2563eb", fontWeight: "bold" }}>
        Stay consistent and keep coding! 🚀
      </p>
    </div>
  );
}

export default About;
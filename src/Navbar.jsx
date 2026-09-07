function Navbar({ currentTab, onSelectTab }) {
  const navStyle = {
    display: "flex",
    gap: "12px",
    marginBottom: "20px",
    borderBottom: "2px solid #e2e8f0",
    paddingBottom: "12px"
  };

  const getButtonStyle = (tabName) => ({
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor: currentTab === tabName ? "#2563eb" : "#e2e8f0",
    color: currentTab === tabName ? "#ffffff" : "#475569",
    transition: "background-color 0.2s ease"
  });

  return (
    <nav style={navStyle}>
      <button 
        style={getButtonStyle("courses")} 
        onClick={() => onSelectTab("courses")}
      >
        My Courses
      </button>

      <button 
        style={getButtonStyle("about")} 
        onClick={() => onSelectTab("about")}
      >
        About Platform
      </button>
    </nav>
  );
}

export default Navbar;
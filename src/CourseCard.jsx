import { useCourses } from './CourseContext';

function CourseCard({ id, title, hours, isCompleted }) {
  const { addHour, toggleStatus } = useCourses();

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "16px",
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      maxWidth: "320px"
    }}>
      <h3 style={{ margin: "0 0 8px 0" }}>{title}</h3>
      <p style={{ margin: "4px 0", color: "#4a5568" }}>
        Logged Hours: <strong>{hours}</strong>
      </p>
      <p style={{
        color: isCompleted ? "#2e7d32" : "#ed6c02",
        fontWeight: "bold"
      }}>
        {isCompleted ? "Status: Completed ✅" : "Status: In Progress ⏳"}
      </p>

      <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
        <button 
          onClick={() => addHour(id)}
          style={{
            padding: "6px 10px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          +1 Hour
        </button>

        <button 
          onClick={() => toggleStatus(id)}
          style={{
            padding: "6px 10px",
            backgroundColor: isCompleted ? "#e2e8f0" : "#16a34a",
            color: isCompleted ? "#334155" : "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          {isCompleted ? "Mark Incomplete" : "Mark Complete"}
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
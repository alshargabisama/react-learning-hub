function Header(){
      function handleSearchChange(e) {
  console.log("Searching for:", e.target.value);
}
    return  (
        <div> 
    <h1> Welcome to Learning Hub </h1> 
    <input 
  type="text" 
  placeholder="Search courses..." 
  onChange={handleSearchChange}
  style={{
    padding: "8px 12px",
    width: "100%",
    maxWidth: "350px",
    borderRadius: "6px",
    border: "1px solid #cbd5e0",
    marginBottom: "16px"
  }}
/>
</div>
    );
}
export default Header; 
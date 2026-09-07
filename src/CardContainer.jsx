function CardContainer({ children }) {
  const containerStyle = {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginTop: "20px"
  };

  return <div style={containerStyle}>{children}</div>;
}

export default CardContainer;
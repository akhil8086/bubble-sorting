
const SortingDisplay = ({ array, sortingTime }) => {
  const maxArrayValue = Math.max(...array);
  const scaleFactor = 100 / maxArrayValue;

  return (
    <div style={{ marginTop: "20px", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {array.map((value, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "10px",
                height: `${value * scaleFactor}px`,
                backgroundColor: "lightgrey",
              }}
            ></div>
            <span style={{ marginTop: "10px" }}>{value}</span>
          </div>
        ))}
      </div>
      {sortingTime !== null && (
        <p style={{ border: "1px dotted red", padding: "10px" }}>
          Time: {sortingTime.toFixed(2)} milliseconds
        </p>
      )}
    </div>
  );
};

export default SortingDisplay;



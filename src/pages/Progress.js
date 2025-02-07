import React, { useState } from "react";

function Progress() {
  const [progress, setProgress] = useState([
    { id: 1, goal: "Lose 5 kg", completed: 50 },
    { id: 2, goal: "Run 10 km", completed: 30 },
    { id: 3, goal: "Do 50 push-ups", completed: 80 },
  ]);

  return (
    <div style={progressStyle}>
      <h2>My Progress</h2>
      <p>Track your fitness journey and celebrate your achievements!</p>
      <div style={progressListStyle}>
        {progress.map((item) => (
          <div key={item.id} style={progressItemStyle}>
            <h3>{item.goal}</h3>
            <div style={progressBarContainer}>
              <div
                style={{
                  ...progressBar,
                  width: `${item.completed}%`,
                }}
              ></div>
            </div>
            <p>{item.completed}% completed</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const progressStyle = {
  maxWidth: "800px",
  margin: "50px auto",
  padding: "20px",
  textAlign: "center",
};

const progressListStyle = {
  marginTop: "20px",
  display: "grid",
  gap: "15px",
};

const progressItemStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "15px",
  textAlign: "left",
};

const progressBarContainer = {
  width: "100%",
  backgroundColor: "#f3f3f3",
  borderRadius: "5px",
  overflow: "hidden",
  height: "20px",
};

const progressBar = {
  height: "100%",
  backgroundColor: "#4caf50",
  transition: "width 0.5s ease-in-out",
};

export default Progress;

import React from "react";

function WorkoutPlans() {
  const plans = [
    {
      id: 1,
      name: "Beginner Full-Body Workout",
      description: "A simple routine focusing on all major muscle groups.",
      duration: "30 minutes",
      level: "Beginner",
    },
    {
      id: 2,
      name: "Cardio Blast",
      description: "A high-energy workout to boost your heart rate and burn calories.",
      duration: "20 minutes",
      level: "Intermediate",
    },
    {
      id: 3,
      name: "Strength Training",
      description: "Build muscle with a focused strength training routine.",
      duration: "45 minutes",
      level: "Advanced",
    },
    {
      id: 4,
      name: "Yoga and Stretching",
      description: "Improve flexibility and relax with guided yoga poses.",
      duration: "40 minutes",
      level: "All Levels",
    },
    {
      id: 5,
      name: "Drinking 3 cups of water every morning",
      description:"It improve your immune health",
      duration: "5 minutes",
      level: "Morning levels ",
    },

  ];

  return (
    <div style={workoutStyle}>
      <h2>Workout Plans</h2>
      <p>Choose a workout plan that suits your fitness goals and skill level.</p>
      <div style={planListStyle}>
        {plans.map((plan) => (
          <div key={plan.id} style={planCardStyle}>
            <h3>{plan.name}</h3>
            <p><strong>Duration:</strong> {plan.duration}</p>
            <p><strong>Level:</strong> {plan.level}</p>
            <p>{plan.description}</p>
            <button style={buttonStyle}>Start Workout</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const workoutStyle = {
  maxWidth: "900px",
  margin: "50px auto",
  textAlign: "center",
};

const planListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px",
};

const planCardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "15px",
  textAlign: "left",
  backgroundColor: "#f9f9f9",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px",
};

export default WorkoutPlans;

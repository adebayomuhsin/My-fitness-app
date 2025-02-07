import React from "react";
import './Navbar.css';  

function Navbar() {
  return (
    <nav>
      <h1>Fitness App</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/workout-plans">Workout Plans</a></li>
        <li><a href="/progress">Progress</a></li>
        <li><a href="/connect">Connect</a></li>
        <li><a href="/BMICalculator">BMI Calculator</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;


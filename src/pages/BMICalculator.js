// src/components/BMICalculator.js
import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const calculateBMI = () => {
    setError(''); // Clear any previous error
    if (!weight || !height || weight <= 0 || height <= 0) {
      setError('Please enter valid positive values for weight and height.');
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters ** 2)).toFixed(2);
    setBMI(bmiValue);

    // Determine BMI category
    let bmiCategory = '';
    if (bmiValue < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      bmiCategory = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obesity';
    }
    setCategory(bmiCategory);
  };

  const clearInputs = () => {
    setWeight('');
    setHeight('');
    setBMI(null);
    setCategory('');
    setError('');
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button onClick={calculateBMI}>Calculate BMI</button>
        <button onClick={clearInputs}>Clear</button>
      </div>
      {error && <p className="error">{error}</p>}
      {bmi && (
        <div className="result">
          <p>Your BMI is: <strong>{bmi}</strong></p>
          <p>Category: <strong>{category}</strong></p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;

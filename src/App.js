import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import WorkoutPlans from "./pages/WorkoutPlans";
import Progress from "./pages/Progress";
import Connect from "./pages/connect";
import BMICalculator from './pages/BMICalculator'; // Adjust the path as needed


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout-plans" element={<WorkoutPlans />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="BMICalculator" element={<BMICalculator/>} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

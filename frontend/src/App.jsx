import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to the Authentication App!</h2>
      <p>Choose an option to get started:</p>
      <div>
        {/* Button for Login */}
        <Link to="/login">
          <button style={buttonStyle}>Login</button>
        </Link>
      </div>
      <div style={{ marginTop: "10px" }}>
        {/* Button for Register */}
        <Link to="/register">
          <button style={buttonStyle}>Register</button>
        </Link>
      </div>
    </div>
  );
}

// Some simple styling for buttons
const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#4CAF50",
  color: "white",
};

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Authentication App</h1>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />
          {/* Other routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

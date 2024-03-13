import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import zxcvbn from "zxcvbn"; // Import zxcvbn library
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [passwordStrength, setPasswordStrength] = useState(""); // State to hold password strength
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    const strength = zxcvbn(value);
    setPasswordStrength(strength.score); 
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 0:
      case 1:
        return "red";
      case 2:
        return "blue";
      case 3:
      case 4:
        return "green";
      default:
        return "black";
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/signup", formData)
      .then((response) => {
        if (response.status === 201) {
          // User created successfully, navigate to frontpage
          navigate("/frontpage");
        }
      })
      .catch((error) => {
        // Display error message from backend in an alert
        alert(error.response.data.message);
      });
  };

  return (
    <div className="signup-a">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <span>using your credentials</span>
        <form className="signup-form" onSubmit={handleSignupSubmit}>
          <div className="signup-form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ color: getStrengthColor() }}>Password Strength: {passwordStrength}</div> {/* Display password strength with color */}
          <br />
          <button type="submit">Sign Up</button>
        </form>
        <br />
        <div className="signup-login">
          <span>
            Already have an account? <Link to="/signin">Sign In</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;

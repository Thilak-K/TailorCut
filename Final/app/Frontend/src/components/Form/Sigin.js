import React from "react";
import "./Sigin.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Sigin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sign-a">
      <div className="sigin-container">
        <h2>Sign In</h2>
        <span>Using ur email</span>
        <form className="sigin-form" onSubmit={handleSubmit}>
          <div className="form-group">
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
          <div className="sign-btn">
            <Link to="/frontpage">
            <button type="submit">Sign In</button>
            </Link>
          </div>
        </form>
        <div className="sign-2">
          <span>or</span>
        </div>

        <div className="sign-icon">
          <div className="social-icons">
            <a href="link-to-google" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="link-to-instagram" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="link-to-some-page" className="social-icon">
              <i className="fas fa-times"></i>
            </a>
          </div>
        </div>
        <br></br>
        <div className="sign-signup">
          <span>Create a new account <Link to="/signup"> Sign Up</Link></span>

          
        </div>
      </div>
    </div>
  );
};
export default Sigin;

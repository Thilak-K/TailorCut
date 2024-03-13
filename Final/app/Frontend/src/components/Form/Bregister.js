import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./Bregister.css";

const BusinessRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    phoneNumber: "",
    businessName: "",
    doorNo: "",
    address: "",
    town: "",
    landmark: "",
    zipcode: "",
    district: "",
    state: "",
    panDetails: "",
    businessProof: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      businessProof: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <div className="business-register-container">
      <h2>Business Registration</h2>
      <form className="business-register-form" onSubmit={handleSubmit}>
        <div className="b-name">
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Business Name:</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Door No:</label>
          <input
            type="text"
            name="doorNo"
            value={formData.doorNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Town:</label>
          <input
            type="text"
            name="town"
            value={formData.town}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Landmark:</label>
          <input
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Zipcode:</label>
          <input
            type="text"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>District:</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>PAN Details:</label>
          <input
            type="text"
            name="panDetails"
            value={formData.panDetails}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Business Proof:</label>
          <input
            type="file"
            name="businessProof"
            onChange={handleFileChange}
            required
          />
        </div>

        <Link to="/frontpage">
          <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default BusinessRegister;

import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './demo.css';

const DemoRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
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

    // Display thank you message
    alert('Thanks for showing interest in our service. Our team members will contact you at your free time.');

    // Optionally, you can reset the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
    });
  };

  return (
    <div className='demo-a'>
    <div className="demo-request">
      <h2>Request a Demo</h2>
      <form onSubmit={handleSubmit}>
        <div className="demo-form-group">
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
   
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
     
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
      
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <Link to="/frontpage">
        <button type="submit">Submit</button>
        </Link>
        
      </form>
    </div>
    </div>
  );
};

export default DemoRequest;

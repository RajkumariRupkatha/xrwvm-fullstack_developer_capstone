import React, { useState } from "react";
import "./Register.css";
import Header from "../Header/Header";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Header />

      <form className="register_container" onSubmit={handleSubmit}>
        <h1 className="header">Sign-up</h1>

        <div className="inputs">
          <div className="input">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              className="input_field"
              type="text"
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              className="input_field"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              className="input_field"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="input_field"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="input_field"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="submit_panel">
          <button className="submit" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

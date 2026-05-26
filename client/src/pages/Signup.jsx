import { useState } from "react";

import API from "../api/axios";

import "./Auth.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/signup", formData);

      alert("Signup Success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />

          <input
            type="date"
            name="dob"
            onChange={handleChange}
          />

          <select
            name="role"
            onChange={handleChange}
          >
            <option value="user">
              User
            </option>

            <option value="admin">
              Admin
            </option>
          </select>

          <button type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
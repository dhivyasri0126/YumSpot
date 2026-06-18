import { useEffect, useState } from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const images = [bg1, bg2, bg3, bg4];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage(
        (prev) => (prev + 1) % images.length
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );

      alert(res.data.message);

      navigate("/");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Signup failed"
      );

      console.log(error);

    }
  };

  return (

    <div className="auth-page">

      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${
            index === currentImage
              ? "active"
              : ""
          }`}
          style={{
            backgroundImage: `url(${image})`
          }}
        ></div>
      ))}

      <div className="overlay"></div>

      <div className="glass-card">

        <h1>YumSpot</h1>

        <h2>Signup</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >

            <option value="user">
              Customer
            </option>

            <option value="owner">
              Hotel Owner
            </option>

          </select>

          <button type="submit">

            Signup

          </button>

        </form>

        <p>

          Already have an account?

          <Link to="/">

            Login

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;
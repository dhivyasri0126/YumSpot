import { useContext, useEffect, useState } from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
        `${import.meta.env.VITE_API_BASE || "http://localhost:5000/api"}/auth/login`,
        formData
      );

      login(res.data);

      alert(res.data.message);

      navigate("/home");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login failed"
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

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

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

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          New user?

          <Link to="/signup">
            Register here
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;
import { useContext, useState } from "react";

import Navbar from "../components/Navbar";

import ThemeToggle from "../components/ThemeToggle";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user, logout } =
  useContext(AuthContext);

const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user?.user?.name || "",
    email: user?.user?.email || "",
    dob: "",
    customerAddress: "",
    hotelAddress: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    alert("Profile updated successfully");
  };
  const handleLogout = () => {
  logout();

  navigate("/");
};

  return (
    <div className="profile-page">
      <Navbar />

      <div className="profile-container">
        <div className="glass-card profile-card">
          <div className="profile-header">
            <h1>My Profile</h1>

            <ThemeToggle />
          </div>

          <form className="profile-form">
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />

            {user?.user?.role === "user" && (
              <textarea
                name="customerAddress"
                placeholder="Enter home address"
                value={formData.customerAddress}
                onChange={handleChange}
              ></textarea>
            )}

            {user?.user?.role === "owner" && (
              <textarea
                name="hotelAddress"
                placeholder="Enter hotel address"
                value={formData.hotelAddress}
                onChange={handleChange}
              ></textarea>
            )}

            <button
              type="button"
              onClick={handleSave}
            >
              Save 
            </button>
            <button
                type="button"
                className="logout-profile-btn"
                onClick={handleLogout}
                >
                Logout
             </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
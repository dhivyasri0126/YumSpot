import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">YumSpot</h2>

      <div className="nav-links">
        <Link to="/home">Home</Link>

        <Link to="/hotels">Hotels</Link>

        <Link to="/my-bookings">
          My Bookings
        </Link>

        <ThemeToggle />

        <Link to="/profile">
          <div className="profile-icon">
            👤
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
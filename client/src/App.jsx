import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyBookings from "./pages/MyBookings";
import AdminBookings from "./pages/AdminBookings";
import logo from "./assets/logo.png";

import "./App.css";

function HomePage() {
  const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  ];

  const restaurants = [
    {
      id: 1,
      name: "Spicy Village",
      location: "Chennai",
      cuisine: "South Indian",
      rating: "4.5 ⭐",
      price: "₹500 for two",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    },

    {
      id: 2,
      name: "Pizza Hub",
      location: "Bangalore",
      cuisine: "Italian",
      rating: "4.2 ⭐",
      price: "₹800 for two",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },

    {
      id: 3,
      name: "Burger Town",
      location: "Hyderabad",
      cuisine: "Fast Food",
      rating: "4.1 ⭐",
      price: "₹400 for two",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },

    {
      id: 4,
      name: "Sea Food Palace",
      location: "Chennai",
      cuisine: "Sea Food",
      rating: "4.8 ⭐",
      price: "₹1200 for two",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    },
  ];

  const [currentSlide, setCurrentSlide] =
    useState(0);

  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  const role = localStorage.getItem("role");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    window.location.reload();
  };

  const filteredRestaurants =
    restaurants.filter(
      (restaurant) =>
        restaurant.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        restaurant.location
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        restaurant.cuisine
          .toLowerCase()
          .includes(search.toLowerCase())
    );

  return (
    <>
      {/* HERO */}

      <section
        className="hero"
        style={{
          backgroundImage: `url(${images[currentSlide]})`,
        }}
      >
        <div className="overlay">

          {/* NAVBAR */}

          <nav className="navbar">
            <div className="logo-section">
              <img
                src={logo}
                alt="logo"
                className="logo-img"
              />
              <h1 className="logo">
                YumSpot
              </h1>
            </div>

            <div className="nav-links">

              <Link to="/">
                Home
              </Link>

              <Link to="/booking">
                Book Table
              </Link>

              {token &&
                role === "user" && (
                  <Link to="/mybookings">
                    My Bookings
                  </Link>
                )}

              {token &&
                role === "admin" && (
                  <Link to="/admin/bookings">
                    Dashboard
                  </Link>
                )}

              {!token ? (
                <>
                  <Link to="/login">
                    Login
                  </Link>

                  <Link to="/signup">
                    Sign Up
                  </Link>
                </>
              ) : (
                <div className="profile-box">

                  <div className="profile-circle">
                    {role === "admin"
                      ? "A"
                      : "U"}
                  </div>

                  <button
                    className="logout-btn"
                    onClick={logout}
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>

          </nav>

          {/* HERO CONTENT */}

          <div className="hero-content">

            <h2>
              Find The Best Restaurants
              Near You
            </h2>

            <p>
              Discover top-rated
              restaurants, explore
              cuisines, and reserve your
              table instantly.
            </p>

            {/* SEARCH */}

            <div className="search-box">

              <input
                type="text"
                placeholder="Search restaurants, cuisine or location..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

            {/* BUTTON */}

            <Link to="/booking">

              <button className="hero-btn">
                Book Table
              </button>

            </Link>

          </div>
        </div>
      </section>

      {/* RESTAURANTS */}

      <section className="restaurant-section">

        <h2 className="section-title">
          Popular Restaurants
        </h2>

        <div className="restaurant-container">

          {filteredRestaurants.map(
            (restaurant) => (
              <div
                className="restaurant-card"
                key={restaurant.id}
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                />

                <div className="card-content">

                  <h3>
                    {restaurant.name}
                  </h3>

                  <p>
                    📍{" "}
                    {restaurant.location}
                  </p>

                  <p>
                    🍽{" "}
                    {restaurant.cuisine}
                  </p>

                  <p>
                    {restaurant.rating}
                  </p>

                  <p>
                    {restaurant.price}
                  </p>

                  <Link to="/booking">

                    <button>
                      Book Table
                    </button>

                  </Link>

                </div>
              </div>
            )
          )}

        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-content">

          <h2>YumSpot</h2>

          <p>
            Reserve your favorite
            restaurant tables with a
            modern and elegant booking
            experience.
          </p>

          <div className="footer-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/booking">
              Booking
            </Link>

          </div>

          <p className="copyright">
            © 2026 . All Rights
            Reserved.
          </p>

        </div>

      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/mybookings"
          element={<MyBookings />}
        />

        <Route
          path="/admin/bookings"
          element={<AdminBookings />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
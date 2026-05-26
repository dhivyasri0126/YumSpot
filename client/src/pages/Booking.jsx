import { useEffect, useState } from "react";

import API from "../api/axios";

import "./Booking.css";

function Booking() {
  const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await API.post("/bookings", bookingData, {
        headers: {
          authorization: token,
        },
      });

      alert("Booking Success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="booking-page"
      style={{
        backgroundImage: `url(${images[currentSlide]})`,
      }}
    >
      <div className="booking-overlay">
        <div className="booking-container">
          <h1>Book Table</h1>

          <form onSubmit={handleSubmit} className="booking-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />

            <input
              type="date"
              name="date"
              onChange={handleChange}
            />

            <input
              type="time"
              name="time"
              onChange={handleChange}
            />
            <select
  name="guests"
  onChange={handleChange}
  defaultValue=""
>
  <option value="" disabled>
    Select Guests
  </option>

  <option value="1">
    1 Guest
  </option>

  <option value="2">
    2 Guests
  </option>

  <option value="3">
    3 Guests
  </option>

  <option value="4">
    4 Guests
  </option>

  <option value="5+">
    5+ Guests
  </option>
</select>
            

            <button type="submit">Reserve Table</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
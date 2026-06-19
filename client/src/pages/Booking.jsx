import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

function Booking() {

  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {

    fetchBookings();

  }, []);

  const fetchBookings = async () => {

    try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const response =
        await fetch(

          `${import.meta.env.VITE_API_BASE || "http://localhost:5000/api"}/bookings/mybookings/${user.name}`

        );

      const data =
        await response.json();

      setBookings(data);

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="bookings-page">

  <Navbar />

  <div className="bookings-container">

    <h1 className="bookings-title">

      My Bookings

    </h1>

        <h1>

          My Bookings

        </h1>

{bookings.length === 0 ? (

  <h2 className="empty-booking">

    No bookings yet 🍽️

  </h2>

) : (

  <div className="bookings-grid">

    {bookings.map((booking) => (

      <div

        key={booking._id}

        className="booking-card"

      >

        <h2>

          {booking.hotelName}

        </h2>

        <p>

          👤 User: {booking.userName}

        </p>

        <p>

          👥 Guests: {booking.guests}

        </p>

        <p>

          📅 Date: {booking.bookingDate}

        </p>

        <div className="booking-status">

          📌 {booking.status}

        </div>

      </div>

    ))}

  </div>

)}

      </div>

    </div>

  );
}

export default Booking;
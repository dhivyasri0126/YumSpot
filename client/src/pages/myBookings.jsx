import { useEffect, useState } from "react";

import API from "../api/axios";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get(
        "/bookings/mybookings",
        {
          headers: {
            authorization: token,
          },
        }
      );

      setBookings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>My Bookings</h1>

      {bookings.map((booking) => (
        <div key={booking._id}>
          <h3>{booking.name}</h3>

          <p>{booking.date}</p>
          <p>{booking.time}</p>

          <p>Status: {booking.status}</p>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;
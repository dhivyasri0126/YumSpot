import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bookings");
      setBookings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBooking = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`);
      fetchBookings();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="page">
      <div className="admin-header">
        <div>
          <h2>All Bookings</h2>
          <p className="subtitle">Manage restaurant table reservations.</p>
        </div>

        <Link className="back-link" to="/">
          Back to Home
        </Link>
      </div>

      {bookings.length === 0 ? (
        <p className="empty-text">No bookings found</p>
      ) : (
        <div className="booking-list">
          {bookings.map((booking) => (
            <div className="booking-card" key={booking._id}>
              <h3>{booking.name}</h3>

              <p>
                <strong>Phone:</strong> {booking.phone}
              </p>

              <p>
                <strong>Email:</strong> {booking.email}
              </p>

              <p>
                <strong>Date:</strong> {booking.date}
              </p>

              <p>
                <strong>Time:</strong> {booking.time}
              </p>

              <p>
                <strong>Guests:</strong> {booking.guests}
              </p>

              <p>
                <strong>Status:</strong> {booking.status}
              </p>

              <button
                className="delete-btn"
                onClick={() => deleteBooking(booking._id)}
              >
                Cancel Booking
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminBookings;
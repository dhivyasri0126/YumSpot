import Navbar from "../components/Navbar";

function Bookings() {

  return (
    <div className="bookings-page">

      <Navbar />

      <div className="bookings-container">

        <h1>
          My Bookings
        </h1>

        <div className="booking-card">

          <h2>
            Sky Dine
          </h2>

          <p>
            👤 Customer
          </p>

          <p>
            🍽 Guests: 4
          </p>

          <p>
            📅 2026-05-30
          </p>

          <h3>
            Pending
          </h3>

        </div>

      </div>

    </div>
  );
}

export default Bookings;
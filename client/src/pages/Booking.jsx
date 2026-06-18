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

          `http://localhost:5000/api/bookings/mybookings/${user.name}`

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

    <div>

      <Navbar />

      <div
        style={{
          padding: "100px 30px"
        }}
      >

        <h1>

          My Bookings

        </h1>

        {bookings.length === 0 ? (

          <h2>

            No bookings yet

          </h2>

        ) : (

          bookings.map(

            (booking) => (

              <div
                key={booking._id}

                style={{

                  border:
                    "1px solid gray",

                  padding: "20px",

                  marginBottom: "20px",

                  borderRadius:
                    "10px"

                }}
              >

                <h2>

                  {booking.hotelName}

                </h2>

                <p>

                  👤 {booking.userName}

                </p>

                <p>

                  👥 Guests :
                  {booking.guests}

                </p>

                <p>

                  📅 {booking.bookingDate}

                </p>

                <p>

                  📌 {booking.status}

                </p>

              </div>

            )

          )

        )}

      </div>

    </div>

  );
}

export default Booking;
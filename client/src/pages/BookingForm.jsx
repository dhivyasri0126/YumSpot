import { useState } from "react";

import Navbar from "../components/Navbar";

import {
  useLocation,
  useNavigate
} from "react-router-dom";

function BookingForm() {

  const location = useLocation();

  const navigate = useNavigate();

  const hotel = location.state;

  const [guests, setGuests] =
    useState(1);

  const [bookingDate,
    setBookingDate] =
    useState("");

  if (!hotel) {

    return (

      <div
        style={{
          color: "white",

          textAlign: "center",

          marginTop: "150px"
        }}
      >

        <h1>

          Please select a hotel first

        </h1>

        <button

          onClick={() =>

            navigate("/hotels")

          }

        >

          Go to Restaurants

        </button>

      </div>

    );

  }

  const handleBooking = async () => {

    if (!bookingDate) {

      alert("Select a date");

      return;

    }

    try {

      const user = JSON.parse(

        localStorage.getItem(
          "user"
        )

      );

      const response = await fetch(

        `${import.meta.env.VITE_API_BASE || "http://localhost:5000/api"}/bookings`,

        {

          method: "POST",

          headers: {

            "Content-Type":

            "application/json"

          },

          body: JSON.stringify({

            userName:
            user?.name,

            hotelName:
            hotel.name,

            guests,

            bookingDate

          })

        }

      );

      if (!response.ok) {

        throw new Error();

      }

      alert(
        "Booking Successful"
      );

      navigate(
        "/my-bookings"
      );

    }

    catch (error) {

      console.log(error);

      alert(
        "Booking failed"
      );

    }

  };

  return (

    <div className="bookings-page">

      <Navbar />

      <div className="booking-box">

        <h1>

          {hotel.name}

        </h1>

        <p>

          📍 {hotel.location}

        </p>

        <p>

          🍽 Available Tables:

          {hotel.tables}

        </p>

        <input

          type="number"

          min="1"

          value={guests}

          onChange={(e) =>

            setGuests(

              Number(
                e.target.value
              )

            )

          }

        />

        <input

          type="date"

          value={bookingDate}

          onChange={(e) =>

            setBookingDate(

              e.target.value

            )

          }

        />

        <button

          onClick={handleBooking}

        >

          Confirm Booking

        </button>

      </div>

    </div>

  );

}

export default BookingForm;
import { useState } from "react";
import { useParams } from "react-router-dom";
import hotels from "./HotelData";
import Navbar from "../components/Navbar";

function HotelDetails() {
  const { id } = useParams();

 
  const hotel = hotels.find(
    (item) => item.id === Number(id)
  );

  const [guests, setGuests] = useState(1);

  const [bookingDate, setBookingDate] =
    useState("");

  const handleBooking = async () => {

  if (!bookingDate) {
    alert("Please select a booking date");
    return;
  }

  try {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    const response = await fetch(
      "http://localhost:5000/api/bookings",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          userName:
            user?.name || "Guest",

          hotelName: hotel.name,

          guests,

          bookingDate

        })
      }
    );

    if (!response.ok) {

      throw new Error(
        "Booking failed"
      );
    }

    await response.json();

    alert("Booking Successful");

  } catch (error) {

    console.log(error);

    alert("Booking failed");
  }
};

  if (!hotel) {

    return (

      <h1
        style={{
          color: "white",

          textAlign: "center",

          marginTop: "150px"
        }}
      >

        Hotel Not Found

      </h1>

    );
  }

  return (

    <div className="hotel-details-page">

      <Navbar />

      <div className="hotel-details-container">

        {/* HERO IMAGE */}

        <div className="details-image-box">

          <img
            src={hotel.image}

            alt={hotel.name}

            className="details-image"
          />

          <div className="details-overlay">

            <h1>{hotel.name}</h1>

            <p>

              📍 {hotel.location}

            </p>

          </div>

        </div>

        {/* INFO */}

        <div className="details-card">

          <div className="info-box">

            <h2>About</h2>

            <p>

              {hotel.description}

            </p>

          </div>

          <div className="info-box">

            <h2>

              Available Tables

            </h2>

            <h3>

              🍽 {hotel.tables}

            </h3>

          </div>

          <div className="info-box">

            <h2>Location</h2>

            <p>

              📍 {hotel.location}

            </p>

          </div>

        </div>

        {/* FOOD MENU */}

        <h2 className="menu-title">

          Food Menu

        </h2>

        <div className="foods-grid">

          {hotel.foods.map(
            (food, index) => (

              <div
                className="food-card"

                key={index}
              >

                <img
                  src={food.image}

                  alt={food.name}
                />

                <div className="food-content">

                  <h3>

                    {food.name}

                  </h3>

                  <p>

                    ₹ {food.price}

                  </p>

                </div>

              </div>

            )
          )}

        </div>

        {/* BOOKING */}

        <div className="booking-box">

          <h2>

            Book Your Table

          </h2>

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

            placeholder="Guests"
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

    </div>
  );
}

export default HotelDetails;
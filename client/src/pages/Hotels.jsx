import Navbar from "../components/Navbar";
import hotels from "./HotelData";
import { Link } from "react-router-dom";

function Hotels() {

  return (
    <div className="hotels-page">
      <Navbar />

      <div className="hotels-container">
        <h1>Explore Restaurants</h1>

        <div className="hotels-grid">
          {hotels.map((hotel) => (
            <div
              className="hotel-card"
              key={hotel.id}
            >
              <div className="hotel-image-box">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                />

                <div className="hotel-overlay">
                  <span>
                    📍 {hotel.location}
                  </span>
                </div>
              </div>

              <div className="hotel-content">
                <h2>{hotel.name}</h2>

                <p>
                  {hotel.description}
                </p>

                <h3>
                  🍽 Available Tables:
                  {" "}
                  {hotel.tables}
                </h3>

                <Link to={`/hotel/${hotel.id}`}>
  <button>View Details</button>
            </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hotels;
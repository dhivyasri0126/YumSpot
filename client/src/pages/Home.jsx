import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";

function Home() {

  const navigate = useNavigate();

  const images = [bg1, bg2, bg3, bg4];

  const [currentImage, setCurrentImage] =
    useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage(
        (prev) => (prev + 1) % images.length
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="main-home">

      <Navbar />

      {/* HERO SECTION */}

      <section className="hero-section">

        {images.map((image, index) => (

          <div
            key={index}

            className={`slide ${
              index === currentImage
                ? "active"
                : ""
            }`}

            style={{
              backgroundImage:
                `url(${image})`
            }}
          ></div>

        ))}

        <div className="overlay"></div>

        <div className="hero-content">

          <div className="glass-card hero-card">

            <h1>

              Welcome to YumSpot

            </h1>

            <p>

              Book luxury restaurant tables,
              explore premium foods and enjoy
              unforgettable dining experiences.

            </p>
<div className="hero-buttons">

  <button
    onClick={() => navigate("/hotels")}
  >
    Explore Restaurants
  </button>

  <button
    className="secondary-btn"

    onClick={() => navigate("/booking")}
  >
    Book Table
  </button>

</div>

          </div>

        </div>

      </section>

      {/* POPULAR RESTAURANTS */}

      <section className="restaurants-section">

        <h2>

          Popular Restaurants

        </h2>

        <div className="restaurants-grid">

          {/* SKY DINE */}

          <div className="restaurant-card">

            <img
              src={bg1}

              alt="Sky Dine"
            />

            <div className="restaurant-info">

              <h3>

                Sky Dine

              </h3>

              <p>

                Luxury rooftop dining

              </p>

              <button
                onClick={() =>
                  navigate("/hotel/1")
                }
              >

                View Details

              </button>

            </div>

          </div>

          {/* HARIBHAVANAM */}

          <div className="restaurant-card">

            <img
              src={bg2}

              alt="Haribhavanam"
            />

            <div className="restaurant-info">

              <h3>

                Haribhavanam

              </h3>

              <p>

                Traditional Chettinad cuisine

              </p>

              <button
                onClick={() =>
                  navigate("/hotel/2")
                }
              >

                View Details

              </button>

            </div>

          </div>

          {/* ROYAL FEAST */}

          <div className="restaurant-card">

            <img
              src={bg3}

              alt="Royal Feast"
            />

            <div className="restaurant-info">

              <h3>

                Royal Feast

              </h3>

              <p>

                Premium family dining

              </p>

              <button
                onClick={() =>
                  navigate("/hotel/3")
                }
              >

                View Details

              </button>

            </div>

          </div>

        </div>

      </section>

    </div>

  );
}

export default Home;
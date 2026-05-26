import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page home-page">
      <div className="hero-card">
        <h1>Welcome to Food Palace</h1>
        <p>Book your table easily and enjoy a comfortable dining experience.</p>

        <div className="button-group">
          <Link to="/booking">
            <button>Book a Table</button>
          </Link>

          <Link to="/admin/bookings">
            <button className="secondary-btn">View Bookings</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
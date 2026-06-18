import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Bookings from "./pages/Booking";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hotels"
          element={
            <ProtectedRoute>
              <Hotels />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hotel/:id"
          element={
            <ProtectedRoute>
              <HotelDetails />
            </ProtectedRoute>
          }
        />
       <Route
          path="/hotel/:id"
          element={
            <ProtectedRoute>
              <HotelDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
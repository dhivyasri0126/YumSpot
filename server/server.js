const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/");

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(5000, () => {
  console.log("Server running");
});
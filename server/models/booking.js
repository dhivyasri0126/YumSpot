import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true
    },

    hotelName: {
      type: String,
      required: true
    },

    guests: {
      type: Number,
      required: true
    },

    bookingDate: {
      type: String,
      required: true
    },

    status: {
      type: String,

      default: "Pending"
    }
  },

  { timestamps: true }
);

export default mongoose.model(
  "Booking",
  bookingSchema
);
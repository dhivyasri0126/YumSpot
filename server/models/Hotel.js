import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    hotelName: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    availableTables: {
      type: Number,
      default: 0
    },

    foods: [
      {
        name: String,
        price: Number,
        image: String
      }
    ],

    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;
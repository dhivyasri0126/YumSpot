import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

/* ADD HOTEL */
router.post("/", async (req, res) => {
  try {
    const newHotel = await Hotel.create(req.body);

    res.status(201).json(newHotel);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

/* GET ALL HOTELS */
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

/* GET SINGLE HOTEL */
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

export default router;
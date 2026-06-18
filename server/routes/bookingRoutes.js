import express from "express";

import Booking from "../models/Booking.js";

const router = express.Router();

/* CREATE BOOKING */

router.post("/", async (req, res) => {

  try {

    const created =
      await Booking.create(
        req.body
      );

    return res
      .status(201)
      .json(created);

  }

  catch (error) {

    return res
      .status(400)
      .json({
        message:
          error.message
      });

  }

});


/* GET ALL BOOKINGS */

router.get("/", async (req, res) => {

  try {

    const bookings =
      await Booking.find()
      .sort({
        createdAt: -1
      });

    return res
      .status(200)
      .json(bookings);

  }

  catch (error) {

    return res
      .status(500)
      .json({
        message:
          error.message
      });

  }

});


/* GET MY BOOKINGS */

router.get(
  "/mybookings/:userName",

  async (req, res) => {

    try {

      const bookings =
        await Booking.find({

          userName:
            req.params.userName

        })

        .sort({
          createdAt: -1
        });

      return res
        .status(200)
        .json(bookings);

    }

    catch (error) {

      return res
        .status(500)
        .json({
          message:
            error.message
        });

    }

  }
);


/* DELETE BOOKING */

router.delete(
  "/:id",

  async (req, res) => {

    try {

      await Booking.findByIdAndDelete(
        req.params.id
      );

      return res
        .status(200)
        .json({

          message:
            "Booking deleted"

        });

    }

    catch (error) {

      return res
        .status(500)
        .json({
          message:
            error.message
        });

    }

  }
);

export default router;
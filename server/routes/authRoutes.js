import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

const router = express.Router();

/* SIGNUP */

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    res.status(201).json({
      message: "User registered successfully",
      user: newUser
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Signup failed",
      error: error.message
    });
  }
});

/* LOGIN */

router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(400).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid password"
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      "secretkey",
      {
        expiresIn: "7d"
      }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Login failed",
      error: error.message
    });
  }
});

export default router;
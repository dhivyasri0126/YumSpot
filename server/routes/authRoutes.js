router.post("/signup", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      dob,
      role,
    } = req.body;

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      dob,
      role,
    });

    await user.save();

    res.json({
      message: "Signup Success",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});
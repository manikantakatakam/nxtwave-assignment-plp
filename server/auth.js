const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

const router = express.Router();
const SECRET_KEY = "your_secret_key";

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://manikantakatakam:manikantakatakam@freeapi.otpjiys.mongodb.net/?retryWrites=true&w=majority&appName=FreeApi",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// User schema and model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Sign-up endpoint
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // Hash the password and save the user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).send("User created");
  } catch (err) {
    console.error("Error during sign-up:", err);
    res.status(500).send("Internal server error");
  }
});

// Sign-in endpoint
router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send("Invalid credentials");
    }

    // Generate a JWT token
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true }).send("Signed in");
  } catch (err) {
    console.error("Error during sign-in:", err);
    res.status(500).send("Internal server error");
  }
});

// Middleware to verify token
router.get("/verify", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send("Unauthorized");

  try {
    const user = jwt.verify(token, SECRET_KEY);
    res.send(user);
  } catch {
    res.status(401).send("Invalid token");
  }
});

module.exports = router;
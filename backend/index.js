const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // Required for parsing cookies

const { User } = require('./models/user');

dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URL);

// Server and Middleware Setup
const jwtSecret = process.env.JWT_SECRET;
const app = express();

app.use(cors({
  credentials: true, // Allow cookies and credentials
  origin: process.env.CLIENT_URL, // Match exactly (e.g., http://localhost:5173)
}));
app.use(cookieParser()); // Middleware to parse cookies
app.use(express.json());

// Test Route
app.get("/test", (req, res) => {
  res.json("test done");
});

// Login Route
app.post("/login", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Create a new user (replace with your actual login logic)
    const createdUser = await User.create({ username, password, email });

    console.log("User inserted");

    // Generate JWT token
    jwt.sign({ userId: createdUser._id }, jwtSecret, {}, (err, token) => {
      if (err) throw err;

      // Send cookie and response
      res.cookie('token', token, {
        
        httpOnly: true, // Secure cookie, not accessible via JavaScript
        sameSite: 'strict', // Ensure cookie is sent only to same-site requests
        secure: false, // Set to true if using HTTPS
      }).status(201).json({ message: 'Login successful', id:createdUser._id });
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start Server
app.listen(4040, () => {
  console.log("Server running on http://localhost:4040");
});

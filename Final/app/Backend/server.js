const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const UserModel = require("./module/Users");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;

const DB_URL =
  "mongodb+srv://Kaliht:Thilak@thilak.ueu2qp2.mongodb.net/Tailorcut";

mongoose.connect(DB_URL);

const db = mongoose.connection;
db.once("open", () => {
  console.log("Database connected");
});
db.on("error", (err) => {
  console.error("Error connecting to database:", err);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Add a new route for handling sign-up requests
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  // Check if a user with the provided email already exists
  UserModel.findOne({ email })
    .then((user) => {
      if (user) {
        // User with the provided email already exists, navigate to sign-in page
        return res.status(400).json({ message: "User already exists. Please sign in." });
      }

      // Create a new user if the email is not already registered
      UserModel.create({ name, email, password })
        .then((newUser) => {
          res.status(201).json({ message: "User created successfully" });
        })
        .catch((err) => {
          console.error("Signup error:", err);
          res.status(500).json({ message: "Internal server error" });
        });
    })
    .catch((err) => {
      console.error("Signup error:", err);
      res.status(500).json({ message: "Internal server error" });
    });
});


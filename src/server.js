import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql2";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cobDBStatus",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
  console.log("Connected to the database");
});

// Login endpoint
app.post("/api/login", (req, res) => {
  console.log("Request body:", req.body);

  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid input data" });
  }

  const query = "SELECT * FROM tbluser WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Database error" });
    }

    if (results.length > 0) {
      res.status(200).json({
        success: true,
        message: "Login successful",
        token: jwt.sign({ username }, "yourSecretKey", { expiresIn: "1h" }),
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }
  });
});
// Password Recovery Endpoint
app.post("/api/recover-password", (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res
      .status(400)
      .json({ success: false, message: "Username is required" });
  }

  const query = "SELECT password FROM tbluser WHERE username = ?";
  db.query(query, [username], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Database error" });
    }

    if (results.length > 0) {
      const fullPassword = results[0].password;
      const maskedPassword = `${fullPassword}`;

      res.status(200).json({
        success: true,
        message: "Password recovery successful",
        hint: maskedPassword, // ✅ Ensure this key is returned
        username: username,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Username not found",
      });
    }
  });
});

// Insert User (POST Request)
app.post("/api/add-user", (req, res) => {
  const { username, password, email } = req.body;

  // Validate input data
  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const query =
    "INSERT INTO tbluser (username, password, email) VALUES (?, ?, ?)";
  db.query(query, [username, password, email], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Database error", error: err });
    }
    res.status(201).json({
      success: true,
      message: "User added successfully",
      userId: result.insertId,
    });
  });
});
// Start the server
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

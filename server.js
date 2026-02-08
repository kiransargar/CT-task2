const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/* Load data */
const users = JSON.parse(fs.readFileSync("./data/users.json"));
const courses = JSON.parse(fs.readFileSync("./data/courses.json"));

/* 🔐 Login API */
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    message: "Login successful",
    userId: user.id
  });
});

/* 📚 Courses API */
app.get("/api/courses", (req, res) => {
  res.json(courses);
});

/* 🌐 Start Server */
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});

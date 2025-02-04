require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// API Route
app.get("/", (req, res) => {
  res.json({
    email: "ogundebusayo16@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/hokagecreativelabs/hng-be-zero",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

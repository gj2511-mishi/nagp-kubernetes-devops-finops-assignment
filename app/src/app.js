const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
  });
});

app.use("/api", employeeRoutes);

module.exports = app;
